/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let num1 = 10
let num2 = 20

let sum = num1 + num2

console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random()*21)
console.log(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Marco",
  cognome: "Furi",
  age: 30
}

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age
console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["html", "css", "javascript"]
console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("nessuno")
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()
console.log(me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  let randomNumber = Math.floor((Math.random()* 6) +1);
  return randomNumber
}

console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(num1, num2){
  if(num1 >= num2){
    return num1
  } else {
    return num2
  } 
}

console.log(whoIsBigger(3, 7))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(str){
  return str.split(" ")
}

let stringa = "Hello world"

console.log(splitMe(stringa))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne (str, boolean){
  if(boolean === true){
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
}

console.log(deleteOne(stringa, false))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

// function onlyLetters (str){
//   let arrayStr = str.split("");
//   let stringModi = [];
//   console.log(arrayStr)
//   for(let i = 0; i < arrayStr.length ; i++){
//     if(parseInt(arrayStr[i]) !== ){
//       stringModi.push(arrayStr[i])
//       console.log(stringModi)
//     }
//   }
//   console.log(stringModi)
//   return arrayStr.join()
// }

// let string = "Hello world, today is the 3 week of course, with 10 weeks to go"

// // console.log(onlyLetters(string))

// function onlyLetters(str){
//   let arrayStr = str.split("");
//   let arrayStrModified = [];
//   arrayStr.forEach((element) => {
//     if(element !== "number"){
//       arrayStrModified.push(element)
//     }
//     arrayStrModified.join()
//   })
//   return arrayStrModified
// }

// console.log(onlyLetters(string))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
/* data una stringa, controllo ci sia una e una sola @. Nel secondo elemento dell'array ottenuto da split "@", devo avere un punto che non deve essere l'ultimo elemento 
*/ 

function isThisAnEmail(str){
  let arrayStr = str.split("@");
  let arrayStrLength = str.split("@").length
  if(arrayStrLength !== 2){
    return false;
  } 

  let secondElement = arrayStr[1]
  let secondElementLength = secondElement.split(".").length
   

  if(secondElement.includes(".") && secondElement.indexOf(".") !== 0 && secondElement.indexOf(".") !== (secondElement.length -1) && secondElementLength === 2){
    return true;
  } else {
    return false;
  }
}

console.log(isThisAnEmail("marcofuri@icloudcom"))

console.log(stringa.length)

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/





function whatDayIsIt(){
  let now = new Date()
  let today = now.getDay();
  
  switch (today){
    case 0:
      return "Domenica"
      break;
    case 1: 
      return "Lunedì"
      break;
    case 2: 
      return "Martedì"
      break;
    case 3: 
      return "Mercoledì"
      break;
    case 4: 
      return "Giovedì"
      break;
    case 5: 
      return "Venerdì"
      break;
    case 6: 
      return "Sabato"
      break;
  }
}

console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const dicesRolled = {
  sum: 0,
  values: []
}

function rollTheDices(num){
  for(let i = 0 ; i < num ; i++){
    let randomNumber = dice();
    dicesRolled.sum += randomNumber;
    dicesRolled.values.push(randomNumber)
  }
  return dicesRolled;
}

console.log(rollTheDices(9))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const now = new Date();
let millisecondsNow = Date.parse(now);


function howManyDays(date){
  const millisecondToDate = Date.parse(date);
  let timePassed = millisecondsNow - millisecondToDate
  let daysPassed = Math.floor((((timePassed/1000)/60)/60)/24)
  return daysPassed;
}

const givenDate = new Date("2023-02-2")

console.log(howManyDays(givenDate))


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const myBirthday = new Date("1993-03-26")

function isTodayMyBirthday(date){
  if(myBirthday.getDate() === date.getDate() && myBirthday.getMonth() === date.getMonth()){
    return true;
  } else {
    return false;
  }
}

const dateToCheck = new Date("2020-03-25")

console.log(isTodayMyBirthday(dateToCheck))



// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
// delete oggetto.stringa

const object = {
  chiave: "valore",
  porta: "portone",
  animale: "cane"
}


function deleteProp(obj, str){
 if(obj[str] !== undefined){
  delete obj[str];
  return console.log(obj)
 } else {
  return console.log(obj)
 }
}

deleteProp(object, "animale")






const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]



/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(array){
  let yearOfNewestMovie = array[0].Year;
  let newestMovie = array[0];

  for(let i = 1 ; i < array.length ; i++){
    if(array[i].Year > yearOfNewestMovie){
      yearOfNewestMovie = array[i].Year;
      newestMovie = array[i];
    }
  }
  return newestMovie
}

console.log(newestMovie(movies))

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(array){
  let sum = 0;

  for(let i = 0 ; i < array.length ; i++){
    sum += 1
  }
  return sum;
}

console.log(countMovies(movies))

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(array){
  const onlyTheYear = array.map((element) => element.Year)
  return onlyTheYear
}

console.log(onlyTheYears(movies))

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(array){
  const onlyInLastMillennium = [];

  array.forEach((element) => {
    if(element.Year <= 2000){
      onlyInLastMillennium.push(element)
    }
  })
  return onlyInLastMillennium
}

console.log(onlyInLastMillennium(movies))

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(array){
  const sum = array.reduce((valoreIniziale, valoreCorrente) => parseInt(valoreIniziale) + parseInt(valoreCorrente), 0)
  return sum;
}

console.log(sumAllTheYears(onlyTheYears(movies)))

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

let titleThatIncludesIt = [];

function searchByTitle(str){
  
  for(let i = 0 ; i < movies.length ; i++){
    let movieTitle = movies[i].Title
    if(movieTitle.indexOf(str) !== -1){
      titleThatIncludesIt.push(movies[i])
    }
  }
  searchAndDivide(str)
  return titleThatIncludesIt
}

console.log(searchByTitle("Lord"))

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(str){
  const newObj = {
    match: [],
    unmatch: []
  }

  titleThatIncludesIt.forEach((element) => newObj.match.push(element))

  for(let i = 0 ; i < movies.length ; i++){
    if(titleThatIncludesIt.includes(movies[i]) === false){
      newObj.unmatch.push(movies[i])
    }
  }
  return console.log(newObj)
}


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex (num){
  movies.splice(num, 1);
  return movies
}

console.log(removeIndex(4))

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const container = document.getElementById("container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const td = document.getElementsByTagName("td");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function printTds(){
  let tdsArray = document.querySelectorAll("td");
  tdsArray.forEach((element) => console.log(element.innerText))
}

printTds()

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function turnAnchorRed(){
  let anchorArray = document.querySelectorAll("a");
  anchorArray.forEach((element) => element.style.backgroundColor = "red")
}

turnAnchorRed()

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function addElementToUl(){
  let li = document.createElement("li");
  li.innerText = "Elemento";

  let listUl = document.getElementById("myList");
  listUl.appendChild(li)
}

addElementToUl()
addElementToUl()
addElementToUl()

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function emptyTheUl() {
  let listUl = document.getElementById("myList");
  let allLis = document.querySelectorAll("li")
  
  allLis.forEach((element) => listUl.removeChild(element))
}

emptyTheUl()

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addClassToTrs(){
  let trsArray = document.querySelectorAll("tr");
  trsArray.forEach((element) => element.classList.add("test"));
}

addClassToTrs()

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  /* il numero fornito è il numero di righe da fare e il numero di asterischi presenti nell'ultima riga. se maggiore di 1, inizia la stampa. ciclo for,
  per ogni ciclo stampa: i = 1 --> 1 asterisco, br. i = 2 --> 2 asterischi, br.
  Creiamo delle p, così siamo sempre a posto, in cui inseriamo del testo: primo ciclo, 1 asterisco, secondo ciclo, 2 asterischi etc etc

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(num){
  if(num <= 0){
    return
  }

  let parag_1 = document.createElement("p");
  parag_1.innerText = "*";
  let treeContainer = document.getElementById("treeContainer");
  treeContainer.appendChild(parag_1)

  for(let i = 2 ; i <= num ; i++){
    let parag_i = document.createElement("p");
    parag_i.innerText = parag_1.innerText + "*";
    treeContainer.appendChild(parag_i);
    parag_1 = parag_i 
  }

}

halfTree(4)


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

// un numero primo è divisibile solo per se stesso e per 1

function isItPrime(num){
  if(num < 2){
    return false;
  } else if(num % 2 === 0){
    return false;
  } else {
    for(let i = 3 ; i <= num/2 ; i++){
      if(num % i === 0){
        return false;
      }
    }
  }
  return true;
}

console.log(isItPrime(23))

