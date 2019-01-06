class charMain {
    //main character attributes
    char:document.getElementById("man"),
    originalPos:13,
    x:0,
    y:0,
    health:100;
    jump_power:12;
    isJump:0;
    gravity:gravity;
    runFramesR : ["im.png","im2.png"];
    runFramesL : ["im.png","im2.png"];
    //jumpFrames : [];
    //shootFrames : [];
    //duckFrames : [];

    mvLeft(){

        console.log("mvLeft body");
        let w = main_win.offsetWidth - this.char.offsetWidth;
        let h = main_win.innerHeight - this.char.offsetHeight;
        console.log(w);
        if (this.x <=0 )
        {
            console.log("moving left");
            this.x=w;
            this.char.style.left=this.x +"px";
            console.log(background_images[j]);
            main_win.style.backgroundImage=background_images[j];
            j=(++j)%background_images.length;
            
        }
        else{
            this.char.src = this.runFramesL[i];
            i=(++i)%this.runFramesL.length;
            this.x -= 25;
            this.char.style.left = this.x + "px";
        }
    }


   

}


//charMain.prototype.mvRight = function(){
    
//}



charMain.prototype.jump = function(){
    let h = main_win.innerHeight - this.char.offsetHeight;
    
    console.log(this.char.offsetHeight);
    console.log("ya sal7daaaaar nazl el sabbbt");
    console.log(h);
    console.log(this.originalPos);
    this.y=40;
    this.char.style.bottom=this.y +"%"; 
    this.gravity = setInterval(this.land,25);
}

charMain.prototype.land = function(){
    console.log("ana nazeeeeeeeeeeel");
    if( this.y > this.originalPos)   
    {   this.y-=1;
        this.char.style.bottom=this.y+ "%"; 
    }   
    else{
        this.char.style.bottom=this.originalPos+"%"; 
        clearInterval(this.gravity);
    }
}


charMain.prototype.move = function(event){
        console.log(event.type);
        if(event.which === 39 )
        {
            console.log("mvRight called");
            var mvRight = () => {
                    console.log("mvRight body");
                    console.log(this);
                    let w = main_win.offsetWidth - this.char.offsetWidth; //search how to work this out
                    let h = main_win.innerHeight - this.char.offsetHeight; //search how to work this out
                    
                    console.log(w);
                    if ( w <= this.x )
                    {
                        console.log("moving right");
                        this.x=0;
                        this.char.style.left=this.x +"px";
                        console.log(background_images[j]);
                        main_win.style.backgroundImage=background_images[j];
                        j=(++j)%background_images.length;
                    }
                    else{
                        //console.log(character_run[i]);
                        this.char.src = this.runFramesR[i];
                        i=(++i)%this.runFramesR.length;
                        this.x += 25;
                        this.char.style.left = this.x + "px";
                        }
                                } 
            mvRight.call(claw);
    }

    else if (event.which === 37)
    {
        console.log("mvLeft called");
        this.mvLeft();
    }

    else if ((event.which === 38) && (!this.land.isJump))
    {
        console.log("Jump called");
        this.jump();
    }

}

var background_images = ["url(back.jpg)","url(back2.jpg)"];
var gravity=0;
let i=0;    //character positions
let j=0;    //background swapper 
var main_win = document.getElementById("main_window");

var claw = new charMain;
console.log(claw.char.offsetHeight);
document.addEventListener( 'keydown', claw.move );






/*

//positions 
let pos1=0; //inmain char
let pos2=0;// ina main char
let original = 13; //
var jumpFlag=0; //
var gravity=0;
//character attributes
jump_power=25; //

//get elements
var character = document.getElementById("man");
var main_win = document.getElementById("main_window");

// images
var character_run = ["im.png","im2.png"];
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
    

/*


function land()
{
    console.log("ana nazeeeeeeeeeeel");
    if( pos2 > original)   
    {   pos2-=1;
        character.style.bottom=pos2+ "%"; 
    }   
    else{
        character.style.bottom=original+"%"; 
        clearInterval(gravity);
    }
}

*/
