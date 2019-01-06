//stored items array

localStorage.setItem('gameStorage', 
JSON.stringify(gameStorage));

function checkLevel(id)
{
    let storage = JSON.parse(localStorage.getItem('gameStorage'));
    let level = storage['level'];
    if (id<=level)
    {
        window.open('level.html','_blank');
    }
    else
    {
        alert("you have not unlocked level"+id+"yet");
    }

}