let storage = JSON.parse(localStorage.getItem('gameStorage'));
let char1 = document.getElementById('char1');
let char2 = document.getElementById('char2');

let sound = new Audio();
sound.src = "1.mp3";
let btn = document.getElementById("btn");
let counter = 0;
function manageAudio()
{
    counter = counter+1;
    if (counter%2)
    {
        sound.play();
    }
    else
    {
        sound.pause();
    }
    console.log(counter);
}

function char1_OnClick(){
    storage['characterId'] = 'char1';
    localStorage.setItem('gameStorage', JSON.stringify(storage));
    char1.style.borderStyle = 'solid';
    char2.style.borderStyle = 'hidden';
}
char1.addEventListener('click', char1_OnClick);

function char2_OnClick(){
    storage['characterId'] = 'char2';
    localStorage.setItem('gameStorage', JSON.stringify(storage));
    char2.style.borderStyle = 'solid';
    char1.style.borderStyle = 'hidden';
}
char2.addEventListener('click', char2_OnClick);
