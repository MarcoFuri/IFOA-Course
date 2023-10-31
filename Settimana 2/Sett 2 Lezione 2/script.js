const mioOggetto = {
    name: "Marco",
    surname: "Furi",
    eta: 30,
    student: true
}

document.getElementById("name").innerHTML = mioOggetto.name;
document.getElementById("surname").innerHTML = mioOggetto.surname;
document.getElementById("eta").innerHTML = mioOggetto.eta

// Aggiunta proprietà
mioOggetto.email = "marcofuri@icloud.com"

document.getElementById("email").innerHTML += mioOggetto.email

//Eliminazione proprietà
delete mioOggetto.eta

document.getElementById("eliminata").innerHTML += mioOggetto.eta

//Creazione nuovo oggetto
const nuovoOggetto = mioOggetto
nuovoOggetto.name = "Nicola";


document.getElementById("primo").innerHTML += mioOggetto.name;
document.getElementById("secondo").innerHTML += nuovoOggetto.name;

const altroOggetto = Object.assign({}, mioOggetto);
//const altroOggetto = {...mioOggetto} Altra sintassi per creare una copia distinta dell'oggetto

altroOggetto.name = "Michael"

/* Utilizzando lo sprea operator (...) o Object.assign() si crea una copia dell'oggetto distinta 
dell'oggetto di partenza */
document.getElementById("precedente").innerHTML += mioOggetto.name;
document.getElementById("nuovo").innerHTML += altroOggetto.name;