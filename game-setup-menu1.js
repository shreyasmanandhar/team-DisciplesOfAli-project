// game-setup-menu1.js

document.getElementById("startGameBtn").addEventListener("click", () => {

    const locationValue = document.getElementById("locationSelect").value;
    const timeValue = document.getElementById("timeSelect").value;

    // VALIDATION (required)
    if (!locationValue || !timeValue) {
        alert("Please select both location and estimated play time.");
        return;
    }

    // SAVE DATA FOR NEXT STEP (Issue 3 will use this)
    const gameSetup = {
        location: locationValue,
        timeLimit: timeValue
    };

    localStorage.setItem("gameSetup", JSON.stringify(gameSetup));

    // Redirect to next screen (gameplay)
    // Replace with your actual next page
    window.location.href = "game.html"; 
});