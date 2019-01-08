let gameStorage = localStorage.getItem('gameStorage') ? JSON.parse(localStorage.getItem('gameStorage')) : {"characterId": char1, "level": 1, "lives": 5, "score": 0, "highestScore": 0 }; //stored items array

localStorage.setItem('gameStorage', JSON.stringify(gameStorage));

