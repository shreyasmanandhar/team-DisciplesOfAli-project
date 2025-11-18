const hiderList = document.getElementById("hiderList");
const statusMsg = document.getElementById("statusMsg");

let allPlayers = JSON.parse(localStorage.getItem("players")) || [];
const finder = allPlayers.find(p => p.role === "finder");
let hiders = allPlayers.filter(p => p.role === "hider" && p.location === finder.location);

function renderHiders() {
    hiderList.innerHTML = "";

    if (hiders.length === 0) {
        statusMsg.textContent = "All hiders found! Game over!";
        return;
    }

    hiders.forEach(hider => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.textContent = hider.name; // show name
        btn.addEventListener("click", () => {
            allPlayers = allPlayers.filter(p => p.id !== hider.id);
            localStorage.setItem("players", JSON.stringify(allPlayers));
            hiders = hiders.filter(p => p.id !== hider.id);
            renderHiders();
        });
        li.appendChild(btn);
        hiderList.appendChild(li);
    });
}

renderHiders();
