let winningPoints = 0
let losingPoints = 0
let clicked;
let score = new Audio("boom.wav")


window.onload = startGame()



function startGame() {
    setTimeout((function(){
        document.getElementById("welcome").style.display = "none"
    }),2000)
    printBall()
}


function printBall() {
    clicked = false
    let createPalla = `<div class="palla" id="palla" onclick="getsPoints()">
        <img src="palla.png" width="100" height="100">
        </div>  `
    let containerPalla = document.getElementById("containerPalla")
    containerPalla.innerHTML = createPalla

    let randomOrizPosition = Math.floor(Math.random()*91)
    let palla = document.getElementById("palla")
    palla.style.left = randomOrizPosition + "%"

    let verticalPositionCounter = -10;
    let timeNeededToRainOut;

    if (winningPoints <= 2){
        timeNeededToRainOut = 20
    } else if (winningPoints > 2 && winningPoints <= 4){
        timeNeededToRainOut = 15
    } else if (winningPoints > 4 && winningPoints <= 7){
        timeNeededToRainOut = 12
    } else {
        timeNeededToRainOut = 10
    }
   
    const makeTheBallMove = setInterval(function makeTheBallRain(){
        console.log("this is how often the interval has been triggered")
        palla.style.top = verticalPositionCounter + "%"
        if (verticalPositionCounter === 100){
            (function stopGame() {
                clearInterval(makeTheBallMove)
                if (clicked === false){
                    losingPoints += 1
                    console.log("This are you losingpoints:", losingPoints)
                    if (losingPoints === 5){
                        return alert("I'm sorry, GAME OVER! TRY AGAIN!")
                    }
                }

                return printBall()
            })()
        } 
        verticalPositionCounter += 1
       
    }, timeNeededToRainOut);
    
}

function getsPoints() {
    document.getElementById("palla").classList.add("clicked")
    winningPoints += 1
    score.play()
    document.getElementById("number").innerText = winningPoints
    clicked = true
}




// al caricamento della pagina, il good luck deve sparire dopo 2 secondi e la palla deve iniziare a stamparsi in
// una posizione random in orizzontale, crescendo di velocità andando avanti e bloccando il gioco con il
// game over quando la palla non viene fermata prima che finisca la pagina

// selezionare una posizione random a partire da left (position absolute left tot %), aggiungere alla posizione top un
// punteggio cresciente di 2% in 2%, a seconda del punteggio aumenta la velocità con cui cade la palla aumentando l'incremento
// della percentuale di spostamento, quando il punteggio arriva a 110%, viene ritriggerata la funzione. quando viene
// ritriggerata da sola, aumento di 1 il punteggio sconfitta, se la palla viene presa, aumento di un punto i punti vittoria.
// se i punti sconfitta sono >= 5, allora arriva l'alert con il gameover.
