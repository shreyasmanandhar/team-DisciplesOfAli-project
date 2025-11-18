const playerList = document.getElementById("playerList");
const statusMsg = document.getElementById("statusMsg");
const startBtn = document.getElementById("startGame");
const goFinderBtn = document.getElementById("goFinder");

let allPlayers = JSON.parse(localStorage.getItem("players")) || [];

// Render players
function renderPlayers() {
    playerList.innerHTML = "";
    allPlayers.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.name} | Location: ${p.location} | Time: ${p.time}min`;
        if (p.role) li.textContent += ` | Role: ${p.role}`;
        playerList.appendChild(li);
    });
}

renderPlayers();

// Assign roles randomly by location
startBtn.addEventListener("click", function () {
    let unmatchedPlayers = [...allPlayers];
    while (unmatchedPlayers.length >= 2) {
        for (let i = 0; i < unmatchedPlayers.length; i++) {
            for (let j = i + 1; j < unmatchedPlayers.length; j++) {
                if (
                    unmatchedPlayers[i].location === unmatchedPlayers[j].location &&
                    !unmatchedPlayers[i].role &&
                    !unmatchedPlayers[j].role
                ) {
                    if (Math.random() < 0.5) {
                        unmatchedPlayers[i].role = "finder";
                        unmatchedPlayers[j].role = "hider";
                    } else {
                        unmatchedPlayers[i].role = "hider";
                        unmatchedPlayers[j].role = "finder";
                    }
                }
            }
        }
        break;
    }

    // Any unassigned players become hiders
    allPlayers.forEach(p => {
        if (!p.role) p.role = "hider";
    });

    localStorage.setItem("players", JSON.stringify(allPlayers));
    renderPlayers();
    statusMsg.textContent = "Roles assigned! Click 'Go to Finder' when ready.";
});

// Go to finder manually
goFinderBtn.addEventListener("click", function () {
    const finder = allPlayers.find(p => p.role === "finder");
    if (!finder) {
        alert("No finder assigned yet!");
        return;
    }
    window.location.href = "finder.html";
});
