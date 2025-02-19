const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");
const dateElement = document.getElementById("date");
const body = document.body;

const backgrounds = [
    "linear-gradient(135deg, #8052ec, #d161ff)",
    "linear-gradient(135deg, #ec5252, #ff6176)"
];

let bgIndex = 0;

// Function to update the clock and date
function updateClock() {
    const dateNow = new Date();
    
    let hr = dateNow.getHours().toString().padStart(2, "0");
    let min = dateNow.getMinutes().toString().padStart(2, "0");
    let sec = dateNow.getSeconds().toString().padStart(2, "0");

    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = sec;

    // Format the date (e.g., "Tuesday, Feb 19, 2025")
    const options = { weekday: "long", year: "numeric", month: "short", day: "numeric" };
    dateElement.textContent = dateNow.toLocaleDateString("en-US", options);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Function to toggle background every 5 seconds
setInterval(() => {
    bgIndex = (bgIndex + 1) % backgrounds.length;
    body.style.backgroundImage = backgrounds[bgIndex];
}, 5000);

// Initialize clock on page load
updateClock();
