//character positions
let storage = JSON.parse(localStorage.getItem('gameStorage'));

let pos1=0;
let pos2=0;
let bull1=0;
let original = 5;
let jumpFlag=0;
let gravity=0;
let health=100;
let score=0;
let bullet_damage=50;

let bullet_damage_ene=50;
let character_run = [];

//character attributes
jump_power=40;
let coincollector=0;
//get elements
let character = document.getElementById("man");
let main_win = document.getElementById("main_window");

// images


let character_die = ["images/char1/ninja-6.png","images/char1/ninja-7.png","images/char1/ninja-8.png","images/char1/ninja-9.png",
"images/char1/ninja-10.png","images/char1/ninja-11.png","images/char1/ninja-12.png"];
let background_images = ["url(images/levels_images/back1.jpg)"];

let char1_chars = ["images/char1/1.png","images/char1/2.png","images/char1/3.png","images/char1/4.png","images/char1/5.png","images/char1/6.png"];
let char2_chars = ["images/char2/1.png","images/char2/2.png","images/char2/3.png","images/char2/4.png","images/char2/5.png"]
if(  ['characterId'] === "char1" )
{
    character_run =char1_chars;
}
else {
    character_run =char2_chars;
}


let i=0;    //character positions
let j=0;    //background swapper 

character.src = character_run[0];
document.addEventListener( 'keydown', move );


let lvlFld = document.getElementsByClassName("lvlFld")[0];
//let weaponFld = document.getElementsByClassName("weaponFld")[0];
let coinsFld  = document.getElementsByClassName("coinsFld")[0];
let scoreFld  = document.getElementsByClassName("scoreFld")[0];
let healthFld  = document.getElementsByClassName("healthFld")[0];
let noLivesFld  = document.getElementsByClassName("noLivesFld")[0];


//enemies 

let enemy_health = [];
let num_enemies;
let enemy_arr;
let enemy_interval=[];



//==========================coins================================== Nada /

function generateCoins(start, noOfCoins){
    let space=start;
    for (let i=0; i<noOfCoins; i++){
        let coin= document.createElement("img");
        coin.src="images/coin.png";
        coin.classList.add("coin");
        coin.style.left= space+'px';    
        main_win.appendChild(coin);
        space += 200;
    }
}
generateCoins(100,4);
//============================================================ EON :v /

function draw_enemy(){
    enemy_arr=document.getElementsByClassName("ene");
    let rand_ene=Math.floor((Math.random() * 2) + 1);
    num_enemies=rand_ene;

    let rand_pos=Math.floor((Math.random() * 20) + 5);
    enemy_arr[0].style.right=rand_pos+"%";
    rand_pos=Math.floor((Math.random() * 25) + 27);
    enemy_arr[1].style.right=rand_pos+"%";

    if( rand_ene ===1 ){
        enemy_arr[0].style.display="block";
        enemy_health[0] = 100;
        //shoot_enemy(0);
        enemy_interval[0] = setInterval(function(){ shoot_enemy(0); },3000);
    }
    else{
        enemy_arr[0].style.display="block";
        enemy_arr[1].style.display="block";
        enemy_health[0]=100;
        enemy_health[1]=100;
        shoot_enemy(0);
        shoot_enemy(1);
        enemy_interval[0] = setInterval(function(){ shoot_enemy(0); },6000);
        enemy_interval[1] = setInterval(function(){ shoot_enemy(1); },6000);
    }

}


//functions


//sleep

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  


function move(event){
    
    //console.log(event.type);
    if(event.which === 39 )
    {
    //    console.log("hello");
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
  //  console.log("ya lahwaaaay");
    let w = main_win.offsetWidth - character.offsetWidth;
    
  //  console.log(w);
    if ( w <= pos1 )
    {
        console.log("ana wasalet");
        pos1=0;
        character.style.left=pos1 +"px";
        console.log(background_images[j]);
        j=(++j)%background_images.length;
        main_win.style.backgroundImage=background_images[j];
        draw_enemy(); 
        generateCoins(100, 3);
    }
    else{
        //console.log(character_run[i]);
        character.src = character_run[i];
        i=(++i)%character_run.length;
        pos1 += 20;
        character.style.left = pos1 + "px";
        coll();
    }

}


function left( ){
  //  console.log("ya 5taaaaayy");
    let w = main_win.offsetWidth - character.offsetWidth;
  //  console.log(w);
    if (pos1 <=0 )
    {
        //console.log("ana wasalet");
        //pos1=w;
        //character.style.left=pos1 +"px";
        //console.log(background_images[j]);
        //j=(++j)%background_images.length;
        //main_win.style.backgroundImage=background_images[j];
        
        character.src = character_run[i];
        i=(++i)%character_run.length;
    }
    else{
        character.src = character_run[i];
        i=(++i)%character_run.length;
        pos1 -= 20;
        character.style.left = pos1 + "px";
        coll();
    }

}


function jump(event){

   // console.log("ya sal7daaaaar nazl el sabbbt");
   // console.log(original);
    pos2=original;
    jumpFlag=1;
    gravity = setInterval(raise,15);

}


function raise()
{
   // console.log("ana taleeeeee3");
    if( pos2 < original+jump_power )   
    {   pos2+=1;
        character.style.bottom=pos2+ "%"; 
    }   
    else{
        clearInterval(gravity);
        gravity = setInterval(land,15);
    }
}


function land()
{
   // console.log("ana nazeeeeeeeeeeel");
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




/*
// scenario 1: 
max=2                                            [[done]]
image-enemy                                      [[done]]
display-none                                     [[done]]
rebuild with background                          [[done]]
position-y=13                                    [[done]]  
position-x=random                                [[done]]
health                                           [[done]]
rebuild with background health                   [[done]]
// fix if there is no enemies                    [[done]]
collision                                        [[done]]
hit-> character-health --                        [[done]]
// reduce health for enemies                     [[done]]
shoot-interval (enemy shoot)                     [[done]]
collision between character and enemy            [[done]] 
=====================


// hero's lives
// show score                                   <-- nouran
// characters (images)
// background (images)

// levels 

enemies move and jump [[later]]
*/





draw_enemy();   



//============================================================ Mo3tasem /

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
    bullet.src = "images/Shuriken.gif"
    main_win.appendChild(bullet);
    bullet.style.top = (character.offsetTop+ 60)+"px";
    bullet.style.left = (character.offsetLeft+95) + "px";

    function move_bullet(){

    if(num_enemies==0){

        let w = main_win.offsetWidth - bullet.offsetWidth;
        if ( w <= counter )
        {
            bullet.parentNode.removeChild(bullet);
            //bull1=0;
            clearInterval(interval);
        }
        else{
            counter += 3;
            bullet.style.left = (counter++  )+"px";
            
        }
    }    
    else{
        for( var i=0 ; i<num_enemies ; i++){

            var enemy = enemy_arr;
            if (!(counter >= enemy[i].offsetLeft) )
            {
                counter+=3;
                bullet.style.left = (counter)+"px";
            }
            else if (counter >= enemy[i].offsetLeft && bullet.offsetTop > enemy[i].offsetTop && bullet.offsetTop < (enemy[i].offsetTop+enemy[i].offsetHeight))
            {
                bullet.parentNode.removeChild(bullet);
                setTimeout(clearInterval(interval), 1);
                //reduce enemys' health
                enemy_health[i]=enemy_health[i]-bullet_damage;
                if (enemy_health[i]<=0)
                {
                    storage['score'] +=15;
                    scoreFld.textContent= "score:"+storage['score'];
                    enemy[i].style.display="none";
                    num_enemies--;
                    clearInterval(enemy_interval[i]);
                    //setTimeout(clearInterval(interval), 1);
                }

            }
           
            else
            {
                let w = main_win.offsetWidth - bullet.offsetWidth;
                if ( w <= counter )
                {
                    bullet.parentNode.removeChild(bullet);
                    //bull1=0;
                    clearInterval(interval);
                }
                else{
                    counter += 5;
                    bullet.style.left = (counter++  )+"px";
                    
                }
                    /*
                counter+=20;
                bullet.style.left = (counter)+"px";
                bullet.parentNode.removeChild(bullet);
                setTimeout(clearInterval(interval), 1);
                */
            }   
           
        }

    }    

     
    }
    var interval = setInterval(move_bullet,1);
}
document.onkeydown = function (e) {

    if( e.keyCode === 32)
    {
        shoot();
        e.preventDefault();
    }
}


//enemys' shoots

function shoot_enemy(k) {

            var counter=enemy_arr[k].offsetLeft-50;
            //console.log(enemy_arr[k].offsetLeft);
            //console.log(counter);
            var bullet = document.createElement("img");
            bullet.src = "images/fire.gif";
            bullet.className = "enemyBullet ";
            main_win.appendChild(bullet);
            bullet.style.top = (enemy_arr[k].offsetTop+ 40)+"px";
            bullet.style.left = (enemy_arr[k].offsetLeft- 95) + "px";
            

            function move_bullet(){
                    //console.log("yaa");
                    var enemy = document.getElementById("man");
                    if (!(counter <= (enemy.offsetLeft+enemy.offsetWidth)) )
                    {
                        if( storage['score'] <800 )
                        {
                            bullet.style.left = (counter-=2)+"px";
                        }
                        else if (storage['score'] <1200)
                        {
                            bullet.style.left = (counter-=3)+"px";
                        }
                        else
                        {
                            bullet.style.left = (counter-=4)+"px";
                        }
                    }
                    else if (counter <= (enemy.offsetLeft+enemy.offsetWidth) && bullet.offsetTop > enemy.offsetTop && bullet.offsetTop < (enemy.offsetTop+enemy.offsetHeight) && bullet.offsetLeft >= enemy.offsetLeft)
                    {
                        bullet.parentNode.removeChild(bullet);

                        //reduce enemys' health
                        health=health-bullet_damage_ene;
                        character.src="images/char1/ninja-6.png";
                        setTimeout(function(){ character.src="images/char1/ninja-1.png"; }, 100);

                        healthFld.textContent= "Health: "+health;

                        console.log("hit");
                        clearInterval(interval);
                        if (health<=0)
                        {
                            console.log(health);
                            //alert("game over");
                            setTimeout( async function(){
                                for(var i=0 ; i< character_die.length ; i++){
                                    character.src=character_die[i];
                                    console.log(character.src);
                                    await sleep(200);
                                }
                            },0);
                            health=100;
                            if(storage['lives'] > 0){
                                storage['lives'] -=1;
                                livesField.textContent= "no.lives:x"+storage['lives'];
                                localStorage.setItem('gameStorage', JSON.stringify(storage));

                                // action when user die with enough lives 
                                let message = confirm("trying is the first step to failure :) retry?");
                                if (message == true){
                                    location.reload();
                                }
                                else{
                                    window.location.href="index.html"
                                }

                            } else {
                                //game over and reset
                                
                                if(storage['score'] > storage['highestScore']){
                                    storage['highestScore']= storage['score'];
                                    storage['level']=1;
                                    storage['lives']=5;
                                    storage['score']=0;
                                    localStorage.setItem('gameStorage', JSON.stringify(storage));
                                    //redirect to home from here or whatever
                                    // action when user die without enough lives 
                                    
                                    
                                }
                                alert("you are such a loser :) back to main menu");
                                window.location.href="index.html"
                            }
                        }

                    }
                    else
                    {

                        let w = main_win.offsetWidth - bullet.offsetWidth;
                        //if ( w <= counter )
                        if(bullet.offsetLeft<=0)
                        {
                            bullet.parentNode.removeChild(bullet);
                            //bull1=0;
                            clearInterval(interval);
                        }
                        else{
                            bullet.style.left = (counter-=2  )+"px";
                            
                        }

                        //bullet.parentNode.removeChild(bullet);
                        //setTimeout(clearInterval(interval), 1);
                    }
                    
                }
                /*
                if(num_enemies==0){

                    let w = main_win.offsetWidth - bullet.offsetWidth;
                    if ( w <= counter )
                    {
                        bullet.parentNode.removeChild(bullet);
                        clearInterval(interval);
                    }
                    else{
                        bull1 += 20;
                        bullet.style.left = (counter++)+"px";
                        
                    }
                }
                */
            var interval = setInterval(move_bullet,1);
    }

    
//============================================================ Nada /
let coins = document.getElementsByClassName('coin');

function collect (event){
    for (let i=0; i<coins.length; i++){
        if ((character.offsetLeft + character.offsetWidth) >= coins[i].offsetLeft 
        && (character.offsetTop+character.offsetHeight) >= coins[i].offsetTop 
        && (character.offsetLeft <= (coins[i].offsetLeft+coins[i].offsetWidth))){
            coins[i].style.visibility="hidden";
            coins[i].parentNode.removeChild(coins[i]);
            coincollector+=1;
            coinsFld.textContent= "Coins:"+coincollector;
            storage['score'] +=5;
            scoreFld.textContent= "score:"+storage['score'];
            
            localStorage.setItem('gameStorage', JSON.stringify(storage));
        }
    }
}
document.addEventListener('keydown',collect);

//============================================================ EON :v /




function coll() {
    var counter=character.offsetLeft+character.offsetWidth;
    for( var i=0 ; i<num_enemies ; i++)
    {
            var enemy = enemy_arr;
            if ((character.offsetLeft+character.offsetWidth) >= enemy[i].offsetLeft && (character.offsetTop +character.offsetHeight )>= (enemy[i].offsetTop) && (character.offsetLeft) <= enemy[i].offsetLeft+enemy[i].offsetWidth)
            {
                
                //check number of lives
                setTimeout( async function(){
                    for(var i=0 ; i< character_die.length ; i++){
                        character.src=character_die[i];
                        console.log(character.src);
                        await sleep(200);
                    }
                },0);

                if(storage['lives'] > 0){
                    storage['lives'] -=1;
                    livesField.textContent= "no.lives:x"+storage['lives'];
                    localStorage.setItem('gameStorage', JSON.stringify(storage));

                    // action when user die with enough lives 
                    let message = confirm("trying is the first step to failure :) retry?");
                    if (message == true){
                        location.reload();
                    }
                    else{
                        window.location.href="index.html"
                    }

                } else {
                    //game over and reset
                    //redirect to home from here or whatever
                    // action when user die without enough lives 
                    alert("you are such a loser :) back to main menu");
                    if(storage['score'] > storage['highestScore']){
                        storage['highestScore']= storage['score'];
                        storage['level']=1;
                        storage['lives']=5;
                        storage['score']=0;
                        localStorage.setItem('gameStorage', JSON.stringify(storage));
                        }
                    window.location.href="index.html"
                }

                /*  
                let message = confirm("Ouch!! retry?");
                if (message == true){
                    location.reload();
                }
                else{
                    window.location.href="../index.html"
                }
                health=0;
                //alert("game over");
                */
            }
            
    }
    

}
//=============================real time value from localstorage=============================== Nada /
let levelField = document.getElementsByClassName("lvlFld")[0];
let coinsField = document.getElementsByClassName("coinsFld")[0];
let livesField = document.getElementsByClassName("noLivesFld")[0];

let levelNumber = storage['level'];
let coinsNumber = storage['score'];
let livesNumber = storage['lives'];

levelField.textContent= "LVL.:"+levelNumber;
coinsField.textContent= "Coins:"+coinsNumber;
livesField.textContent= "no.lives:x"+livesNumber;
//============================================================ EON :v /
