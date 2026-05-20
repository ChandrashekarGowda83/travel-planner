from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import requests
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

API_KEY = os.getenv("OPENROUTER_API_KEY")

@app.route("/generate-plan", methods=["POST"])
def generate_plan():

    data = request.get_json()

    destination = data.get("destination")
    budget = data.get("budget")
    days = data.get("days")

    prompt = f"""
Create a detailed, exciting, and realistic {days}-day travel itinerary for {destination}
within budget ₹{budget}.

The response should include:

1. A short introduction about {destination}
2. Day-wise itinerary with:
   - Morning activities
   - Afternoon activities
   - Evening activities
3. Famous tourist attractions
4. Best local food recommendations
5. Budget hotels or hostels to stay
6. Approximate budget breakdown
7. Local transport suggestions
8. Shopping places and famous items to buy
9. Safety and travel tips
10. Best photo spots and sunset points

Keep the response:
- visually attractive
- tourist-friendly
- detailed but easy to understand
- practical for real travelers

Use headings and spacing properly.
"""

    try:

        response = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",

            headers={
                "Authorization": f"Bearer {API_KEY}",
                "Content-Type": "application/json"
            },

            json={
                "model": "openai/gpt-3.5-turbo",

                "messages": [
                    {
                        "role": "user",
                        "content": prompt
                    }
                ]
            }
        )

        result = response.json()

        print(result)

        # CHECK ERROR RESPONSE

        if "error" in result:
            return jsonify({
                "error": result["error"]["message"]
            }), 500

        # CHECK CHOICES EXISTS

        if "choices" not in result:
            return jsonify({
                "error": "No AI response received",
                "details": result
            }), 500

        plan = result["choices"][0]["message"]["content"]

        return jsonify({
            "plan": plan
        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 500

if __name__ == "__main__":
    app.run(debug=True)