let storage = JSON.parse(localStorage.getItem('gameStorage'));
let char1 = document.getElementById('char1');
let char2 = document.getElementById('char2');
let chosenChar = document.getElementById('chosenChar');





if(storage['characterId'] == 'char1'){
    char1.style.borderStyle = 'solid';
    char1.style.borderRadius = '15px';
    char1.style.borderColor = 'white';
    char2.style.borderStyle = 'hidden';
    chosenChar.textContent = 'Character 1 chosen';
} else {
    char2.style.borderStyle = 'solid';
    char2.style.borderRadius = '15px';
    char2.style.borderColor = 'white';
    char1.style.borderStyle = 'hidden';
    chosenChar.textContent = 'Character 2 chosen'
}

let sound = new Audio();
sound.src = "js/1.mp3";
let btn = document.getElementById("audioImg");
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
    char1.style.borderColor = 'white';
    char2.style.borderStyle = 'hidden';
    chosenChar.textContent = 'Character 1 chosen'
}
char1.addEventListener('click', char1_OnClick);

function char2_OnClick(){
    storage['characterId'] = 'char2';
    localStorage.setItem('gameStorage', JSON.stringify(storage));
    char2.style.borderStyle = 'solid';
    char2.style.borderColor = 'white';
    char1.style.borderStyle = 'hidden';
    chosenChar.textContent = 'Character 2 chosen'
}
char2.addEventListener('click', char2_OnClick);
