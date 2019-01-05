let coins = document.getElementsByClassName('coin');

let storage = JSON.parse(localStorage.getItem('gameStorage'));

let level = storage['level'];

function generateCoins(){
    if(level == 1){
        let space=100;
        for (let i=0; i<3; i++){
            let clonedCoin= coins[0].cloneNode(true);
            document.getElementById("main_window").appendChild(clonedCoin);
            space +=200;
            clonedCoin.style.left=space+'px';
        }
    } else {
        let space=100;
        for (let i=0; i<2; i++){
            let clonedCoin= coins[0].cloneNode(true);
            document.getElementById("main_window").appendChild(clonedCoin);
            space +=300;
            clonedCoin.style.left=space+'px';
        }
    }
}

generateCoins();

coins = document.getElementsByClassName('coin');

function move (event){
    let man = document.getElementById('man');
    for (let i=0; i<coins.length; i++){
        if (man.getBoundingClientRect().left == coins[i].getBoundingClientRect().left){
            coins[i].style.visibility="hidden";
            coins[i].parentNode.removeChild(coins[i]);
            storage['score'] +=1;
            localStorage.setItem('gameStorage', JSON.stringify(storage));
        }
    }
}
document.addEventListener('keydown',move);



