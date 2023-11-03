/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 5;
let y = 5;

function area (l1, l2){
    let calcolo = l1 * l2;
    return calcolo;
}

console.log(area(x, y))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let somma;

function crazySum (num1, num2){
    if(num1 === num2){
        somma = (num1 + num2) * 3;
        return somma;
    } else {
        somma = num1 + num2;
        return somma;
    }
}

console.log(crazySum(3, 3))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let diff;

function crazyDiff(num){
    if(num <= 19){
        diff = (num - 19) * -1;
        return diff;
    } else {
        diff = (num - 19) * 3;
        return diff;
    }
}

console.log(crazyDiff(12))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let result;

function boundary(n){
    if(n >= 20 && n <= 100 || n === 400){
        return result = true;
    } else {
        return result = false;
    }
}

console.log(boundary(401))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epifany(stringa){
    if(stringa.indexOf("EPICODE") !== 0){
        return "EPICODE " + stringa;
    } else {
        return stringa;
    }
}

console.log(epifany("ciao mondo"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let risultato;

function check3and7(numPos){
    if(numPos % 3 === 0 || numPos % 7 === 0){
        return risultato = true;
    } else {
        return risultato = false;
    }
}

console.log(check3and7(9))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa){
    let arrayStringa = stringa.split("");
    arrayStringa.reverse(); 
    arrayStringa = arrayStringa.join("");
    return arrayStringa;
}

console.log(reverseString("ciao mondo"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(string){
    let array = string.split(" ");
    let upperCaseArray = [];
    
    for(let i = 0 ; i < array.length ; i++){
        upperCaseArray.push(array[i].charAt(0).toUpperCase() + array[i].substring(1));
    }
    return upperCaseArray.join(" ");
}

console.log(upperFirst("ciao a tutti"))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(frase){
    let penultimoCarattere = frase.length - 1;
    let fraseTagliata = frase.slice(1, penultimoCarattere);
    return fraseTagliata;
}

console.log(cutString("vediamo se funziona"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function giveMeRandom(n){
    let arrayNumeri = [];
    for(let i = 1 ; i <= n ; i++){
        arrayNumeri.push(Math.floor(Math.random() * 11))
    }
    return arrayNumeri;
}

console.log(giveMeRandom(7))
