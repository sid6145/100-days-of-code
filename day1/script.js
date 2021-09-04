document.addEventListener('keypress', (e) => {
    makeSound(e.key)
    makeAnimation(e.key)
})

function makeSound(key) {
    switch(key){
        case "a":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "f":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "g":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "h":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "j":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        

        default:
            console.log(key)
    }
}

function makeAnimation(key){
    let activeKey = document.querySelector(`.${key}`)
    activeKey.classList.add('key-press')

    setTimeout(function(){
        activeKey.classList.remove('key-press')
    }, 1)
}