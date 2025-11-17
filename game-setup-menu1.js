// TEMP player list — replace later with backend or server storage
let allPlayers = [];

document.getElementById("gameSetupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Collect values
  const hints = document.getElementById("hints").value;
  const location = document.getElementById("location").value;
  const time = document.getElementById("time").value;

  // Temporary unique ID
  const playerId = Date.now().toString();

  // Player data object
  const currentPlayer = {
    id: playerId,
    hints: hints,
    location: location,
    time: time
  };

  // Add player (for demo only)
  allPlayers.push(currentPlayer);

  console.log("Player Created:", currentPlayer);
  alert("Game Started! Your info has been saved.");

});