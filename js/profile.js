let storage = JSON.parse(localStorage.getItem('gameStorage'));

let livesCount = storage['lives'];

let score = storage['score'];

let levels = storage['level']; 

let charId = storage['characterId'];

let highScore = storage['highestScore'];

document.getElementById('livesCount').textContent= livesCount;
//document.getElementById('score').textContent= score;
document.getElementById('score').textContent= highScore;

document.getElementById('level').textContent= levels;

document.getElementById('character').textContent= charId;




badge1 = document.getElementById("badge1");
badge2 = document.getElementById("badge2");
badge3 = document.getElementById("badge3");



if (storage['level'] === 2)
{
    badge1.style.display = "inline-block";
}
else if(storage['level'] === 3)
{
    badge1.style.display = "inline-block";
    badge2.style.display = "inline-block";
}
else if (storage['level'] === 4)
{
    badge1.style.display = "inline-block";
    badge2.style.display = "inline-block";
    badge3.style.display = "inline-block";
}
else {
    badge1.style.display = "none";
    badge2.style.display = "none";
    badge3.style.display = "none";
}