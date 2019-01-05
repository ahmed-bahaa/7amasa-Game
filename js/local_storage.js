let gameStorage = localStorage.getItem('gameStorage') ? JSON.parse(localStorage.getItem('gameStorage')) : {"characterId": null, "level": 1, "lives": null, "score": 0 }; //stored items array

localStorage.setItem('gameStorage', JSON.stringify(gameStorage));

