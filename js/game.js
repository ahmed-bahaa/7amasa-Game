//character positions 
let pos1=0;
let pos2=0;
let bull1=0;
let original = 13;
let jumpFlag=0;
let gravity=0;
let health=100;
let score=0;
let bullet_damage=50;

//character attributes
jump_power=35;

//get elements
let character = document.getElementById("man");
let main_win = document.getElementById("main_window");

// images
let character_run = ["images/im.png","images/im2.png"];
let background_images = ["url(images/back.jpg)","url(images/back2.jpg)"];
let i=0;    //character positions
let j=0;    //background swapper 

document.addEventListener( 'keydown', move );


//enemies 

let enemy_health = [];
let num_enemies;
let enemy_arr;
let enemy_interval=[];


//==========================coins================================== Nada /
let storage = JSON.parse(localStorage.getItem('gameStorage'));

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
    gravity = setInterval(raise,21);
    
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
        gravity = setInterval(land,21);
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
    main_win.appendChild(bullet);
    bullet.style.top = (character.offsetTop+ 40)+"px";
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
            counter += 5;
            bullet.style.left = (counter++  )+"px";
            
        }
    }    
    else{
        for( var i=0 ; i<num_enemies ; i++){

            var enemy = enemy_arr;
            if (!(counter >= enemy[i].offsetLeft) )
            {
                counter+=5;
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

function shoot_enemy( k) {

            var counter=enemy_arr[k].offsetLeft-50;
            //console.log(enemy_arr[k].offsetLeft);
            //console.log(counter);
            var bullet = document.createElement("img");
            bullet.className = "bullet";
            main_win.appendChild(bullet);
            bullet.style.top = (enemy_arr[k].offsetTop+ 40)+"px";
            bullet.style.left = (enemy_arr[k].offsetLeft- 95) + "px";
            

            function move_bullet(){
                    //console.log("yaa");
                    var enemy = document.getElementById("man");
                    if (!(counter <= (enemy.offsetLeft+enemy.offsetWidth)) )
                    {
                        bullet.style.left = (counter--)+"px";
                    }
                    else if (counter <= (enemy.offsetLeft+enemy.offsetWidth) && bullet.offsetTop > enemy.offsetTop && bullet.offsetTop < (enemy.offsetTop+enemy.offsetHeight) && bullet.offsetLeft >= enemy.offsetLeft)
                    {
                        bullet.parentNode.removeChild(bullet);
                        //reduce enemys' healthet
                        health=health-bullet_damage;
                        console.log("hit");
                        clearInterval(interval);
                        if (health<=0)
                        {
                            alert("game over");
                            health=100;
                            storage['lives'] -=1;
                            localStorage.setItem('gameStorage', JSON.stringify(storage));
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
                            bullet.style.left = (counter--  )+"px";
                            
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
        if (character.getBoundingClientRect().left == coins[i].getBoundingClientRect().left){
            coins[i].style.visibility="hidden";
            coins[i].parentNode.removeChild(coins[i]);
            storage['score'] +=1;
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
                console.log("crash");
                health=0;
                //alert("game over");
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
