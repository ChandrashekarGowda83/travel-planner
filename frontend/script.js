async function fetchTravelPlan(destination, budget, days, outputId = "result") {
    const output = document.getElementById(outputId);
    if (!output) return;

    output.innerText = "Generating AI Travel Plan... ✈";

    try {
        const response = await fetch("http://127.0.0.1:5000/generate-plan", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                destination,
                budget,
                days
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Backend returned an error");
        }

        output.innerText = data.plan || "No plan received.";
    } catch (error) {
        console.error("Error generating plan:", error);
        output.innerText = "Error generating plan: " + error.message;
    }
}

function goToResultPage() {
    const destination = document.getElementById("destination").value.trim();
    const budget = document.getElementById("budget").value.trim();
    const days = document.getElementById("days").value.trim();

    if (destination === "" || budget === "" || days === "") {
        alert("Please fill all fields");
        return;
    }

    sessionStorage.setItem("destination", destination);
    sessionStorage.setItem("budget", budget);
    sessionStorage.setItem("days", days);

    window.location.href = "result.html";
}

/* Optional compatibility:
   If any old button still calls generatePlan(), it will still work. */
function generatePlan() {
    goToResultPage();
}

function loadResultPage() {
    const destination = sessionStorage.getItem("destination") || "";
    const budget = sessionStorage.getItem("budget") || "";
    const days = sessionStorage.getItem("days") || "";

    const editDestination = document.getElementById("editDestination");
    const editBudget = document.getElementById("editBudget");
    const editDays = document.getElementById("editDays");

    const showDestination = document.getElementById("showDestination");
    const showBudget = document.getElementById("showBudget");
    const showDays = document.getElementById("showDays");

    if (editDestination) editDestination.value = destination;
    if (editBudget) editBudget.value = budget;
    if (editDays) editDays.value = days;

    if (showDestination) showDestination.innerText = destination || "-";
    if (showBudget) showBudget.innerText = budget || "-";
    if (showDays) showDays.innerText = days || "-";

    if (document.getElementById("planText")) {
        fetchTravelPlan(destination, budget, days, "planText");
    }
}

function updatePlan() {
    const destination = document.getElementById("editDestination").value.trim();
    const budget = document.getElementById("editBudget").value.trim();
    const days = document.getElementById("editDays").value.trim();

    if (destination === "" || budget === "" || days === "") {
        alert("Please fill all fields");
        return;
    }

    sessionStorage.setItem("destination", destination);
    sessionStorage.setItem("budget", budget);
    sessionStorage.setItem("days", days);

    const showDestination = document.getElementById("showDestination");
    const showBudget = document.getElementById("showBudget");
    const showDays = document.getElementById("showDays");

    if (showDestination) showDestination.innerText = destination;
    if (showBudget) showBudget.innerText = budget;
    if (showDays) showDays.innerText = days;

    fetchTravelPlan(destination, budget, days, "planText");
}

function saveUser() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (name === "" || email === "" || phone === "") {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPhone", phone);

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name, email, phone });
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "planner.html";
}

function loadUsers() {
    const table = document.getElementById("userTable");
    if (!table) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    table.innerHTML = "";

    users.forEach(user => {
        table.innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
            </tr>
        `;
    });
}

function adminLogin() {
    const username = prompt("Enter Admin Username");
    const password = prompt("Enter Admin Password");

    const adminUser = "admin";
    const adminPass = "1234";

    if (username === adminUser && password === adminPass) {
        window.location.href = "users.html";
    } else {
        alert("Access Denied ❌");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const welcomeText = document.getElementById("welcomeText");
    const userName = localStorage.getItem("userName");

    if (welcomeText && userName) {
        welcomeText.innerText = "Welcome " + userName + " 🚀";
    }

    loadUsers();
    loadResultPage();
});