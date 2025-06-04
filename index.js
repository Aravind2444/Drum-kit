var buttonCount=document.querySelectorAll("button").length;

// event Listener for mouse clicks
for(var i=0;i<buttonCount;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(event){
        var buttonInnerContent=this.innerHTML;



        playSound(buttonInnerContent);
        buttonAnimation(buttonInnerContent);

    })
}

//event listener for keypresses
document.addEventListener("keydown",function(event){

    var pressedKey=event.key;
    playSound(pressedKey);
    buttonAnimation(pressedKey);
});

//function to play sound

function playSound(criteriaToPlay){
    if(criteriaToPlay=="a"){
        var crash=new Audio("../sounds/crash.mp3");
        crash.play();
    }else if(criteriaToPlay=="s"){
        var kick_bass=new Audio("../sounds/kick-bass.mp3");
        kick_bass.play();
    }else if(criteriaToPlay=="d"){
        var snare=new Audio("../sounds/snare.mp3");
        snare.play();
    }else if(criteriaToPlay=="f"){
        var tom1=new Audio("../sounds/tom-1.mp3");
        tom1.play();
    }else if(criteriaToPlay=="j"){
        var tom2=new Audio("../sounds/tom-2.mp3");
        tom2.play();
    }else if(criteriaToPlay=="k"){
        var tom3=new Audio("../sounds/tom-3.mp3");
        tom3.play();
    }else if(criteriaToPlay=="l"){
        var tom4=new Audio("../sounds/tom-4.mp3");
        tom4.play();
    }else{
        console.log(criteriaToPlay);
    }
}

//function to animate the button pressed
function buttonAnimation(pressedButton){
    var activeButton=document.querySelector("."+pressedButton);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
