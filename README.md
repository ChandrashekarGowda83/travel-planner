# 🌍 AI Travel Planner

An AI-powered travel planner web application that generates smart and detailed travel itineraries based on destination, budget, and trip duration using OpenAI API integration.

---

## ✨ Features

- 🤖 AI-generated travel plans
- 📍 Google Maps integration
- 🌙 Dark / Light mode
- 📖 Trip history page
- 📋 Copy travel plan feature
- 📱 Fully responsive UI
- 🎨 Beautiful modern design
- 🧳 Budget-based itinerary generation
- 🗺 Dynamic destination support
- ⚡ Loading animation while generating plans

---

## 🛠 Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Python
- Flask

### API
- OpenAI API

### Tools
- Git & GitHub
- VS Code

---

## 🔄 Project Workflow

1. User enters:
   - Destination
   - Budget
   - Number of days

2. Frontend sends request to Flask backend.

3. Backend uses OpenAI API to generate:
   - Day-wise itinerary
   - Morning, afternoon, evening activities
   - Tourist attractions
   - Food recommendations
   - Budget breakdown
   - Travel tips
   - Photo spots

4. Response is formatted beautifully on the result page.

5. Maps buttons allow users to explore locations directly on Google Maps.

6. Generated trips are saved in trip history.

---

## 📂 Project Structure

```bash
travel-planner/
│
├── backend/
│   ├── app.py
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── planner.html
│   ├── result.html
│   ├── history.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│       └── banner.jpg
│
└── .gitignore
```

---

## 🚀 How to Run the Project

### 1️⃣ Clone Repository

```bash
git clone https://github.com/ChandrashekarGowda83/travel-planner.git
```

### 2️⃣ Open Project Folder

```bash
cd travel-planner
```

### 3️⃣ Install Dependencies

```bash
pip install flask openai python-dotenv flask-cors
```

### 4️⃣ Add OpenAI API Key

Create `.env` file inside `backend/`

```env
OPENAI_API_KEY=your_api_key_here
```

### 5️⃣ Run Backend

```bash
cd backend
python app.py
```

### 6️⃣ Open Frontend

Open:

```bash
frontend/index.html
```

in browser.

---

## 📸 Screenshots

- Planner Page
- AI Generated Result Page
- Dark Mode
- History Page

(Add screenshots here later)

---

## 🎯 Future Improvements

- User authentication
- Save favorite trips
- Download PDF itinerary
- Hotel recommendations
- Weather integration
- Real-time transport suggestions

---

## 👨‍💻 Developed By

**Chandrashekar Gowda**

AI Travel Planner Project using Flask + OpenAI API.
