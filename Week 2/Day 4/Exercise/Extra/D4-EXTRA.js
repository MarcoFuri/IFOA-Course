// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n){
    let arrayNumeri = [];
    for(let i = 1 ; i <= n ; i++){
        arrayNumeri.push(Math.floor(Math.random() * 11))
    }
    return arrayNumeri;
}

function checkArray(arrayNumeri){
    let somma = 0
    for(let i = 0 ; i < arrayNumeri.length ; i++){
        if(arrayNumeri[i] > 5){
            somma += arrayNumeri[i]
            console.log("Si " + arrayNumeri[i] + " è maggiore di 5")
        } else if(arrayNumeri[i] < 5){
            console.log("No " + arrayNumeri[i] + " non è maggiore di 5")
        } else {
        }
    }
    return somma;
}

console.log(checkArray(giveMeRandom(8)))

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let shoppingCart = [
    ombrello = {
        price: 15,
        name: "umbrella",
        id: "umb32",
        quantity: 1
    },
    tazza = {
        price: 10,
        name: "mug",
        id: "mug21",
        quantity: 2
    },
    tastiera = {
        price: 39,
        name: "keybord",
        id: "key98",
        quantity: 1
    },
    cavo_HDMI = {
        price: 12,
        name: "HDMI clable",
        id: "hdmi52",
        quantity: 4
    }
]


function shoppingCartTotal(){
    let somma = 0;
    let objectPrice;
    let objectQuantity;

    for(let i = 0 ; i < shoppingCart.length ; i++){
        objectQuantity = shoppingCart[i].quantity 
        objectPrice = shoppingCart[i].price
        somma += (objectPrice * objectQuantity)
    }
    return somma;
}

console.log(shoppingCartTotal())

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function addToShoppingCart(aggiunta){
    shoppingCart.push(aggiunta)
    console.log(shoppingCart)
    let somma = 0;
    for(let i = 0 ; i < shoppingCart.length ; i++){
        somma += shoppingCart[i].quantity;
    }
    return somma;
}

let penne = {
        price: 2,
        name: "pen",
        id: "pen77",
        quantity: 4
    }

console.log(addToShoppingCart(penne))

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(shoppingCart[0].price)

function maxShoppingCart(shoppingCart){
    let mostExpensive = shoppingCart[0].price
    for(let i = 1 ; i < shoppingCart.length ; i++){
        if(shoppingCart[i].price > mostExpensive){
            mostExpensive = shoppingCart[i].price
        }
    }
    return mostExpensive;
}
console.log(maxShoppingCart(shoppingCart))

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart(shoppingCart){
    let indexOfLastItem = shoppingCart.length - 1
    return shoppingCart[indexOfLastItem]
}

console.log(latestShoppingCart(shoppingCart))

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


// function loopUntil(n){
//     let randomNumber = Math.floor(Math.random() * 9)
//     let contoInferiore = 0;
//     do {
//         console.log(randomNumber);
//         randomNumber = randomNumber
//     }(while )
    
// }

// console.log(loopUntil(4))

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function average(array){
    let somma = 0;
    let contoElementi = 0;
    let media;

    for(let i = 0 ; i < array.length ; i++){
        if(typeof array[i] === "number"){
            contoElementi += 1;
            somma += array[i];
        }
    }
    media = somma / contoElementi
    return media;
}

let randomArray = [42, "Hello, World!", true, 3.14, false, "OpenAI"];

console.log(average(randomArray))

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function longest(array){
    let longestStringChar = array[0].length
    let longestString = array[0]
    for(let i = 1 ; i < array.length ; i++){
        if(longestStringChar < array[i].length){
            longestStringChar = array[i].length
            longestString = array[i]
        }
    }
    return longestString
}

let newArray = ['The quick brown fox', 'jumps over the lazy dog', 'Once upon a time', 'in a land far, far away', 'Coding is fun', 'and so is learning new things'];

console.log(longest(newArray))

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function spamChecker(emailContent){
    console.log(emailContent)
    console.log(emailContent.search("SCAM"))
    if(emailContent.search("SCAM") === -1 && emailContent.search("SPAM") === -1){
        return true;
    } else {
        return false;
    }
}


console.log(spamChecker("ciao cuore spam come stai"))

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 2 nuove variabili, la prima che serve per calcolare i millisecondi fino ad oggi e l'altra per calcolare i millisecondi ad arrivare alla data fornita. Sottraggo la seconda alla prima
 e ottengo i millisecondi dalla data ad oggi. Un po' di divisioni e arriviamo a sapere quanti giorni quei millisecondi sono */

function daysTillToday(date){
    let millisAdOggi = Date.parse(Date())
    let millisDataFornita = Date.parse(date)
    let millisData_Oggi = millisAdOggi - millisDataFornita
    let calcoloSecondi = millisData_Oggi / 1000
    let calcoloGiorni = (((calcoloSecondi / 60) / 60) /24)
    return Math.floor(calcoloGiorni)
}

console.log(daysTillToday("2023-11-02"))

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function matrixGenerator(x, y){
    let matrixGenerated = [];
    for(let i = 0 ; i <= x ; i++){
        matrixGenerated.push("0" + i)
    }
    for(let j = 0 ; j <= x ; i++){

    }
}

