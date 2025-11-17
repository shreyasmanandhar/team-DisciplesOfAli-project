const players = [];

function savePlayer() 
{
    const name = document.getElementById('name').value.trim();
    const appearance = document.getElementById('appearance').value.trim();

    // check if player entered a name
    if(!name)
    {
        alert("Please enter a name.");
        document.getElementById('name').focus();
        return;
    }

    // create player object
    const player = {
        name: name,
        appearance: appearance
    };

    //Add players to player array
    players.push(player);

    // save confirm
    alert("Player saved:\n" + JSON.stringify(player));
    console.log("All players:", players);
}

document.getElementById('userForm').addEventListener('submit', function(e) {
   e.preventDefault();
   savePlayer(); 
});