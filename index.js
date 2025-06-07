for (var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonInnerhtml=this.innerHTML;
        soundPlay(buttonInnerhtml);
        buttonAnimation(buttonInnerhtml);
    })
}

document.querySelector("html").addEventListener("keydown",function(event){
    var keyPressed=event.key;
    soundPlay(keyPressed);
    buttonAnimation(keyPressed);
    
})

function soundPlay(key){
switch(key){
    case "a":
        var crash=new Audio("./sounds/crash.mp3");
        crash.play();
        break;
    case "s":
        var kickbass=new Audio("./sounds/kick-bass.mp3");
        kickbass.play();
        break;
    case "d":
        var snare=new Audio("./sounds/snare.mp3");
        snare.play();
        break;
    case "h":
        var tom1=new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
    case "j":
        var tom2= new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
    case "k":
        var tom3=new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;
    case "l":
        var tom4=new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;
    default:
        console.log(key);
    }
}

function buttonAnimation(current){
    activeKey=document.querySelector("."+current);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100);
}
