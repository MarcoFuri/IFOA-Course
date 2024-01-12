window.addEventListener("scroll", function(){
    let navBar = document.querySelector("nav");
    let navButton = document.querySelector("nav button");

    if(window.scrollY > 400) {
        navBar.classList.add("navScrolled")
        navButton.classList.add("buttonScrolled")
    } else {
        navBar.classList.remove("navScrolled")
        navButton.classList.remove("buttonScrolled")
    }
})

let lettersShown = [];
let numberLetters;

window.onload = animation()

function animation () {
    let arrayLetters = document.querySelectorAll("svg g");

    for(let i = 0 ; i < arrayLetters.length ; i++){
        if(parseInt(arrayLetters[i].getAttribute("opacity")) === 1){
            lettersShown.push(arrayLetters[i])
        }
    }
    numberLetters = lettersShown.length
    return numberLetters;
}

setInterval(randomizeOpacityLetters, 100)
function randomizeOpacityLetters(){
    let randomNumber = Math.floor(Math.random() * numberLetters);
    let changingLetter = lettersShown[randomNumber];
    changingLetter.setAttribute("opacity", 0);

    setTimeout(function() {
        changingLetter.setAttribute("opacity", 1)
    }, 4000)
}