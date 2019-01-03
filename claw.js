
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
var character_run = ["im.png","im2.png","enemy.gif"];
var background_images = ["url(back.jpg)","url(back2.jpg)"];
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
    let h = main_win.innerHeight - character.offsetHeight;
    
    console.log(w);
    if ( w <= pos1 )
    {
        console.log("ana wasalet");
        pos1=0;
        character.style.left=pos1 +"px";
        console.log(background_images[j]);
        main_win.style.backgroundImage=background_images[j];
        j=(++j)%background_images.length;
    }
    else{
        //console.log(character_run[i]);
        character.src = character_run[i];
        i=(++i)%character_run.length;
        pos1 += 25;
        character.style.left = pos1 + "px";
    }

}



function left( ){
    console.log("ya 5taaaaayy");
    let w = main_win.offsetWidth - character.offsetWidth;
    let h = main_win.innerHeight - character.offsetHeight;
    console.log(w);
    if (pos1 <=0 )
    {
        console.log("ana wasalet");
        pos1=w;
        character.style.left=pos1 +"px";
        console.log(background_images[j]);
        main_win.style.backgroundImage=background_images[j];
        j=(++j)%background_images.length;
        
    }
    else{
        character.src = character_run[i];
        i=(++i)%character_run.length;
        pos1 -= 25;
        character.style.left = pos1 + "px";
    }

}





function jump(event){

    let h = main_win.innerHeight - character.offsetHeight;
    
    console.log(character.offsetHeight);
    console.log("ya sal7daaaaar nazl el sabbbt");
    console.log(h);
    console.log(original);
    pos2=40;
    character.style.bottom=pos2 +"%"; 
    gravity = setInterval(land,25);
 
    
    /*
    else{
        character.src = character_run[i];
        i=(++i)%character_run.length;
        pos1 -= 25;
        character.style.left = pos1 + "px";
    }
    */
    
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
    }
}

