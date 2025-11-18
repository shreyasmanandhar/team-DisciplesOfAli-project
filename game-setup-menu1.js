console.log("Loaded game-setup-menu1.js");

if (!window.gameSetupAttached) {
  window.gameSetupAttached = true;

  const form = document.getElementById("gameSetupForm");
  const goToLobbyBtn = document.getElementById("goToLobby");
  const clearBtn = document.getElementById("clearPlayers");

  // Add player
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const hints = document.getElementById("hints").value.trim();
    const location = document.getElementById("location").value;
    const time = document.getElementById("time").value;

    if (!name || !hints || !location || !time) {
      alert("Please fill in all fields.");
      return;
    }

    const newPlayer = {
      id: Date.now().toString(),
      name,
      hints,
      location,
      time
    };

    let allPlayers = JSON.parse(localStorage.getItem("players")) || [];
    allPlayers.push(newPlayer);
    localStorage.setItem("players", JSON.stringify(allPlayers));

    alert("Player added!");
    form.reset();
  });

  // Go to lobby
  goToLobbyBtn.addEventListener("click", function () {
    let allPlayers = JSON.parse(localStorage.getItem("players")) || [];
    if (allPlayers.length === 0) {
      alert("No players added yet!");
      return;
    }
    window.location.href = "lobby.html";
  });

  // Clear all players
  clearBtn.addEventListener("click", () => {
    localStorage.removeItem("players");
    alert("All players cleared!");
  });
}
