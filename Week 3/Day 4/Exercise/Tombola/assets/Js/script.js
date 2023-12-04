const btnEstrai = document.getElementById("estrai");
const estratti = [];

const playerMatch = [];
const cardNumbers = [];

document.addEventListener("load", init());


function init() {
    for (let i = 1 ; i < 91 ; i++){
        const container = document.querySelector("#container");
        const casella = document.createElement("div");
        casella.classList.add("casella");
        casella.innerText = i;
        container.appendChild(casella);
    }

};

btnEstrai.addEventListener("click", function() {
    estrai();
});


function estrai() {
    let estratto = Math.floor(Math.random() * 91);
    let invalido = estratti.find(value => value === estratto)
    if(invalido){
        console.log("TROVATO!!!")
        estrai()
    } else {
        playerAction(estratto);
        estratti.push(estratto);
        document.getElementById("estratto").innerText = estratto;
        console.log(estratti);
        colora(estratto);
    }
    
};

function playerAction(estratto) {
        playerMatch.push(estratto);
        const cella = document.querySelectorAll(".cell");
        cella.forEach((element) => {
            let extractNumber = Number(element.innerText);
            if(extractNumber === estratto){
                element.style.backgroundColor = "red"
            }
        })
}

function colora(numero){
    const casella = document.querySelectorAll(".casella");
    casella.forEach((element) => {
        numeroCasella = Number(element.innerText);
        if(numeroCasella === numero) {
            element.style.backgroundColor = "red";
        }
    })
};


function createCard () {
    for (let i = 1 ; i < 16 ; i++){
        // ho bisogno di creare un numero randomico che non sia già all'interno dell'array dei numeri contenuti nella mia scheda
        let randomNumber;
        do {
            randomNumber = generateNumber();
        } while (cardNumbers.includes(randomNumber))

        cardNumbers.push(randomNumber);
        const container = document.querySelector("#card");
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.innerText = randomNumber; 
        container.appendChild(cell);
    }
    let startReset = document.getElementById("start").style.display = "none";
    document.getElementById("estrai").style.display = "block"
}


function generateNumber () {
    return Math.floor(Math.random() * 91);
}

