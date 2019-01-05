let storage = JSON.parse(localStorage.getItem('gameStorage'));

let livesCount = storage['lives'];

let score = storage['score'];

let levels = storage['level']; 

let charId = storage['characterId'];

document.getElementById('livesCount').textContent= livesCount;

document.getElementById('score').textContent= score;

document.getElementById('level').textContent= levels;

document.getElementById('character').textContent= charId;

