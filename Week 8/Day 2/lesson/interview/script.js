// importare BT, creare array di obj con un id, nome, descrizione, renderizzare in una tabella
// bootstrap

const obj = [
    {
        id: 38273,
        name: "Marco",
        surname: "Furi",
        city: "Milano"
    },
    {
        id: 76575,
        name: "Stefania",
        surname: "Galazzo",
        city: "Torina"
    },
    {
        id: 75698,
        name: "Mario",
        surname: "Rossi",
        city: "Bologna"
    },
    {
        id: 98686,
        name: "Giacomo",
        surname: "Verdi",
        city: "Vicenza"
    },
    {
        id: 64763,
        name: "Francesco",
        surname: "Bianchi",
        city: "Rovigo"
    },
    {
        id: 6475364,
        name: "Piero",
        surname: "Gialli",
        city: "Padova"
    },
    {
        id: 6464,
        name: "Daniele",
        surname: "Viola",
        city: "Palermo"
    },
    {
        id: 87586,
        name: "Sara",
        surname: "Neri",
        city: "Venezia"
    },
    {
        id: 245764,
        name: "Lorenzo",
        surname: "Neri",
        city: "Livorno"
    },
    {
        id: 6775986,
        name: "Franco",
        surname: "Bianchi",
        city: "Milano"
    },
    {
        id: 8747689,
        name: "Gabriele",
        surname: "Rossi",
        city: "Firenze"
    }
    
]


function populateTable(array) {
    let tableRowsContainer = document.getElementById("tableRowsContainer")
    tableRowsContainer.innerHTML = ""
    array.forEach((element) => {
        let newRow = `<tr>
        <th scope="row">${element.id}</th>
        <td>${element.name}</td>
        <td>${element.surname}</td>
        <td>${element.city}</td>
        <td><button class="btn btn-danger btn-sm" onclick="deleteRow(${element.id})">X</button></td>
      </tr>`

        tableRowsContainer.innerHTML += newRow
    })
}

populateTable(obj)

function deleteRow(id) {
    // console.log(obj.indexOf(object))
    // obj.forEach(element => {
    //     if (element.id === obj.id)
    // })
    let tiHoBeccato = 0
    obj.find((element, index) => {
        let value = Object.values(element)[0]
        if (value === id){
            console.log(value)
            tiHoBeccato = index
        }
    })
    console.log("index to delete", tiHoBeccato)
    obj.splice(tiHoBeccato, 1)
    console.log(obj)
    populateTable(obj)
}