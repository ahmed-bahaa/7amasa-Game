//positions 
let pos1=0;
let pos2=0;
let original = 13;
var jumpFlag=0;
var gravity=0;

//character attributes
jump_power=25;

//get elements
var character = document.getElementById("man");
var main_win = document.getElementById("main_window");

// images
var character_run = ["images/im.png","images/im2.png"];
var background_images = ["url(images/back.jpg)","url(images/back2.jpg)"];
let i=0;    //character positions
let j=0;    //background swapper 

document.addEventListener( 'keydown', move );

//functions
function move(event){
    
    console.log(event.type);
    if(event.which === 39 )
    {
        console.log("hello");
    right();  
    }

    else if (event.which === 37)
    {
        left();
    }

    else if ((event.which === 38) && (!jumpFlag))
    {
        jump();
    }
   
}


function right( ){
    console.log("ya lahwaaaay");
    let w = main_win.offsetWidth - character.offsetWidth;
    
    console.log(w);
    if ( w <= pos1 )
    {
        console.log("ana wasalet");
        pos1=0;
        character.style.left=pos1 +"px";
        console.log(background_images[j]);
        j=(++j)%background_images.length;
        main_win.style.backgroundImage=background_images[j];
    }
    else{
        //console.log(character_run[i]);
        character.src = character_run[i];
        i=(++i)%character_run.length;
        pos1 += 20;
        character.style.left = pos1 + "px";
    }

}


function left( ){
    console.log("ya 5taaaaayy");
    let w = main_win.offsetWidth - character.offsetWidth;
    console.log(w);
    if (pos1 <=0 )
    {
        console.log("ana wasalet");
        pos1=w;
        character.style.left=pos1 +"px";
        console.log(background_images[j]);
        j=(++j)%background_images.length;
        main_win.style.backgroundImage=background_images[j];
        
        
    }
    else{
        character.src = character_run[i];
        i=(++i)%character_run.length;
        pos1 -= 20;
        character.style.left = pos1 + "px";
    }

}





function jump(event){

    console.log("ya sal7daaaaar nazl el sabbbt");
    console.log(original);
    pos2=original;
    jumpFlag=1;
    gravity = setInterval(raise,21);
    
}


function raise()
{
    console.log("ana taleeeeee3");
    if( pos2 < original+jump_power )   
    {   pos2+=1;
        character.style.bottom=pos2+ "%"; 
    }   
    else{
        clearInterval(gravity);
        gravity = setInterval(land,21);
    }
}


function land()
{
    console.log("ana nazeeeeeeeeeeel");
    if( pos2 > original )   
    {   pos2-=1;
        character.style.bottom=pos2+ "%"; 
    }   
    else{
        character.style.bottom=original+"%"; 
        clearInterval(gravity);
        jumpFlag=0;
    }
}
/============================================================ Mo3tasem /

var lastLoopRun = 0;

function setPosition(charchter) {
    character.style.top = charchter.y+"px";
}


var lp= function loop(bullet) {
    if (counter<300) {
        return false;
    }

    setTimeout(lp(bullet), 2);
}
var arrOfEnemies = [];
function shoot() {
    var counter=character.offsetLeft+50;
    var bullet = document.createElement("img");
    bullet.className = "bullet";
    main_win.appendChild(bullet);
    bullet.style.top = (character.offsetTop+ 40)+"px";
    bullet.style.left = (character.offsetLeft+95) + "px";
    function move(){

        var enemy = document.getElementById("enemy");
        if (!(counter >= enemy.offsetLeft) )
        {
            bullet.style.left = (counter++)+"px";
        }
        else if (counter >= enemy.offsetLeft && bullet.offsetTop > enemy.offsetTop && bullet.offsetTop < (enemy.offsetTop+enemy.offsetHeight))
        {
            bullet.parentNode.removeChild(bullet);
            enemy.parentNode.removeChild(enemy);
            setTimeout(clearInterval(interval), 1);
        }
        else
        {
            bullet.parentNode.removeChild(bullet);
            setTimeout(clearInterval(interval), 1);
        }
    }
    var interval = setInterval(move,1);
}
document.onkeydown = function (e) {

    if( e.keyCode === 32)
    {
        shoot();
        e.preventDefault();
    }
}




