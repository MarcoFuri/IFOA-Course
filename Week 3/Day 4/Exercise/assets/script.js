// 1. Dobbiamo capire in che mese siamo e scriverlo nell'h1, per sapere auanti giorni ha e per generare il corretto numero di celle

const now = new Date();
console.log(now)

/* 2. Per salvare gli appuntamenti abbiamo bisogno di un'array: ogni appuntamento è una stringa, ogni giorno può contenere infiniti
appuntamenti e ogni mese ha il numero di giorni variabile. 
Creeremo un array di array, dove l'array padre è il mese e gli array figli rappresentano i giorni
[ --> mese
    [primo giorno], [secondo giorno], [terzo giorno],....
]
*/

const appointments = [];

// Dento appointments pushiamo tanti sottoarray quanti sono i giorni del mese corrente

const monthNames = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre"
]

const scriviMese = function() {
    const title = document.querySelector("h1");
    const indiceMese = now.getMonth(); // 10 perchè siamo a novembre
    const nomeMese = monthNames[indiceMese];
    title.innerText = nomeMese;
}
scriviMese()

//Dato che febbraio ha 29 giorni negli ani bisestili, per sapere quanti giorni ha il mio mese mi serve anche l'anno

const giorniTotali = function () {
    const anno = now.getFullYear(); // 2023 perchè siamo nel 2023
    const mese = now.getMonth(); 

    /*dal momento che nell'oggetto date il numero dei giorni del mese parte da 1, mi basta sapere qual è l'ultimo giorno del 
    mese in corso per avere il suo numero di gionri 
    Per sapere l'ultimo giorno del mese in corso */

    let ultimoGiorno = new Date(anno, mese +1, 0); 
    const numeroGiorni = ultimoGiorno.getDate();
    console.log(numeroGiorni);
    return numeroGiorni;
}

giorniTotali()

//ora va creata la griglia dei div contenenti i giorni del mese in corso; questa griglia userà il numero di giorni per
// gestire l'array globale creato all'inizio e scriverà i vari div

const creaGriglia = function(numeroGiorni) {
    //numeroGiorni è il numero di giorni del mese corrente

    const calendarDiv = document.getElementById("calendar");

    for (let i = 0 ; i < numeroGiorni ; i++){
        const cellaGiorno = document.createElement("div"); // ad ogni giorno associo un div
        cellaGiorno.classList.add("day"); 

        const valoreCella = document.createElement("h3");
        valoreCella.innerText = i + 1;

        //appendiamo i bambini
        cellaGiorno.appendChild(valoreCella);
        calendarDiv.appendChild(cellaGiorno);

        //creato il calendario, inserisco nell'array appointments 
        appointments.push([]);

        //evento click sul singolo giorno

        cellaGiorno.addEventListener("click", function(e) { 
            //rendo ciclabili i div dei giorni
            deselezionaCelle(); 
            
            //deseleziono l'eventuale altra cella selezionata
            cellaGiorno.classList.add("selected"); 
            
            // scrivo il giorno cliccato nella sezione Giorno del form
            //aggiungo la classe css per mostrare la selezione del giorno cliccato
            giornoAppuntamento(i); 

            // se ci sono già appuntamenti nella giornata, devo far apparire la lista
            if(appointments[i].length > 0){
                mostraAppuntamenti(i);
            } else {
                const divAppuntamenti = document.getElementById("appointments");
                divAppuntamenti.style.display = "none";
            }
        });
    }
} 


//Seleziono TUTTI gli elementi con classe selected e rimuovo la classe

const deselezionaCelle = function() {
    const celle = document.querySelectorAll(".day");
    celle.forEach((element) => {
        element.classList.remove("selected");
    }); 
};

//Quando faccio click su un giorno, nel div id="newMeetingDay", dovrò leggere la data selezionata

const giornoAppuntamento = function(indiceGiorno) {
    const giorno = document.getElementById("newMeetingDay");
    giorno.classList.add("hasDay");
    giorno.innerText = indiceGiorno +1;
}

creaGriglia(giorniTotali())


const mostraAppuntamenti = function(indiceGiorno){
    //con questa funzione si popola la lista degli appuntamenti con gli appuntamenti del giorno

    // 1 prendere gli appuntamenti giusti
    const appuntamentiGiorno = appointments[indiceGiorno];
    
    // 2 selezionare la lista contenitore
    const lista = document.querySelector("#appointments ul");

    // 3 svuotare la lista
    lista.innerHTML = "";

    // 4 ciclare gli appuntamenti del giorno e creare un li per ciascuno di essi
    appuntamentiGiorno.forEach((element) => {
        const newLi = document.createElement("li");
        newLi.innerText = element;
        lista.appendChild(newLi);
    });
    
    // 5 la lista è piena ma è ancora nascosta
    const divAppuntamenti = document.getElementById("appointments");
    divAppuntamenti.style.display = "block";
};


const meetingForm = document.querySelector("form");
meetingForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // 1 giorno dell'appuntamento
    const selectedDay = document.getElementById("newMeetingDay").innerText;

    //2 ora dell'evento selezionato
    const meetingTime = document.getElementById("newMeetingTime").value;

    // 3 nome dell'appuntamento
    const meetingName = document.getElementById("newMeetingName").value;

    // 4 creo la stringa dell'appuntamento
    const stringaAppuntamento = `${meetingTime} - ${meetingName}`;

    // 5 scrivo l'appuntamento nell'array
    const indiceArray = parseInt(selectedDay) -1;
    appointments[indiceArray].push(stringaAppuntamento); 

    // creo un pallino che evidenzi nel calendario la presenza di un appuntamento
    const pallino = document.createElement("div");
    pallino.classList.add("pallino");

    // cerco il div del giorno selezionato 
    const divSelezionato = document.querySelector(".selected");
    if (!divSelezionato.querySelector(".pallino")){
        divSelezionato.appendChild(pallino);
    }

    // document.getElementById("newMeetingTime").value = "";
    // document.getElementById("newMeetingName").value = "";

    meetingForm.reset()

    mostraAppuntamenti(indiceArray);
});


