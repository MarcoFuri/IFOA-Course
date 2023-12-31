/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 4;
let num2 = 4;

if(num1 > num2){
  console.log(num1 + " è il numero più grande.");
} else if (num1 < num2){
  console.log(num2 + " è il numero più grande.");
} else {
  console.log("I due numeri forniti sono uguali!");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 4;

if(num3 !== 5){
  console.log("not equal");
}

// /* ESERCIZIO 3
//   Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
let num4;

if(num4 % 5 === 0){
  console.log("divisibile per 5");
}

// /* ESERCIZIO 4
//   Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
let num5 = 7;
let num6 = 8;

if(num5 === 8 || num6 === 8 || num5 + num6 === 8 || num5 - num6 === 8 || num6 - num5 === 8){
  console.log("Uno dei due numeri forniti è uguale a 8");
} else {
  console.log("La somma dei numeri forniti è uguale a 8");
}

// /* ESERCIZIO 5
//   Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
//   C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
//   Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 65;
let totalExpense;

if(totalShoppingCart >= 50){
  totalExpense = totalShoppingCart
  console.log("Congratulation for reaching the minimum of 50€! For you the delivery is free!");
} else {
  totalExpense = totalShoppingCart + 10;
  console.log("Thanks for your purchases! Here's your expenses with the delivery: " + totalExpense);
}

// /* ESERCIZIO 6
//   Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
//   Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */


let totalCostBlackFriday = totalShoppingCart - (20/100)

if (totalCostBlackFriday >= 50){
  console.log("Congratulation for reaching the minimum of 50€! For you the delivery is free!");
} else {
  totalExpense = totalCostBlackFriday + 10
  console.log("Thanks for your purchases! Here's your expenses with the delivery: " + totalExpense);
}

// /* ESERCIZIO 7
//   Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
//   Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
//   Alla fine mostra il risultato in console.
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

let num7 = 12;
let num8 = 4;
let num9 = 8;
let highestNumber;
let mediumNumber;
let lowestNumber;

let changingNumber;

if (num7 >= num8 && num7 >= num9){
  highestNumber = num7;
  if (num8 >= num9){
    mediumNumber = num8;
    lowestNumber = num9;
  } else {
    mediumNumber = num9;
    lowestNumber = num8;
  } 
}

if (num7 > num8 && num7 < num9){
  highestNumber = num9;
  mediumNumber = num7;
  lowestNumber = num8;
} 

if (num7 < num8 && num7 > num9){
  highestNumber = num8;
  mediumNumber = num7;
  lowestNumber = num9;
}

if (num7 < num8 && num7 < num9){
  lowestNumber = num7;
  if (num8 > num9){
    highestNumber = num8;
    mediumNumber = num9;
  } else {
    highestNumber = num9;
    mediumNumber = num8;
  }
} 

console.log("L'ordine dei numeri per grande è: " + highestNumber + ", " + mediumNumber + ", " + lowestNumber + ".")



// /* ESERCIZIO 8
//   Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

let valore = "hola";

if (typeof valore === typeof 1){
  console.log("Yes, the type of " + valore + " is 'number'");
} else {
  console.log("No, the type of " + valore + " is not 'number'");
}

// /* ESERCIZIO 9
//   Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

let num10 = 8;

if (num10 % 2 === 0){
  console.log("The number " + num10 + " is even!");
} else {
  console.log("The number " + num10 + " is odd!");
}

// /* ESERCIZIO 10
//   Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
//   let val = 7
//   if (val < 10) {
//       console.log("Meno di 10");
//     } else if (val < 5) {
//       console.log("Meno di 5");
//     } else {
//       console.log("Uguale a 10 o maggiore");
//     }
// */

// /* SCRIVI QUI LA TUA RISPOSTA */

let val = 7 

if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
} else if (val > 5){
  console.log("Meno di 10");
} else {
  console.log("Meno di 5");
}

// /* ESERCIZIO 11
//   Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
// */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"
console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let indexOfElementToDelete = (me.skills.length) - 1
delete me.skills[indexOfElementToDelete]

console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array = [];

array[0] = 1; 
array[1] = 2;
array[2] = 3;
array[3] = 4;
array[4] = 5;
array[5] = 6;
array[6] = 7;
array[7] = 8;
array[8] = 9;
array[9] = 10;

console.log(array)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

array[array.length - 1] = 100 // array[9]

console.log(array)
