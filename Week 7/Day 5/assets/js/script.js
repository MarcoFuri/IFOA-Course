const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjNjZWMwNTgzNTAwMTg1MjJjYWUiLCJpYXQiOjE3MDIzNzIzMDMsImV4cCI6MTcwMzU4MTkwM30.XEHxsPolD6tzN9SwpjALfPfdYGounWcFkX3L9tC3VWg"
const url = "https://striveschool-api.herokuapp.com/api/product/"

let products = []


function populatePage(obj) {
    console.log("inside the function",products)
    if (obj === undefined){
        console.log("inside the if",products)
        fetch(url, {
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            products = data
            // localStorage.setItem("products", JSON.stringify(products))
            products.forEach((element) => {
                console.log(element)
                const cardContainer = document.querySelector(".cardContainer")
                const newCardProduct = `<div class="card position-relative" style="width: 18rem;">
                <img src="${element.imageUrl}" class="card-img-top pt-3 w-75 mx-auto" alt="">
                <div class="card-body">
                  <h5 class="card-title">${element.brand}</h5>
                  <p class="card-text">${element.description}</p>
                  <p class="card-text">${element.price}€</p>
                  <div class="position-absolute bottom-0 end-0 m-2">
                    <button type="button" class="btn btn-primary btn-sm" onclick="getInfo('${element._id}')">More info</button>
                    <button type="button" class="btn btn-warning btn-sm" onclick="modifyItem('${element._id}')">Modify</button>
                  </div>
                </div>
              </div>`
                cardContainer.innerHTML += newCardProduct
            })
        })
        .catch(err => console.log(err))

       
    } else {
        const cardContainer = document.querySelector(".cardContainer")
            const newCardProduct = `<div class="card" style="width: 18rem;">
            <img src="${obj.imageUrl}" class="card-img-top pt-3 w-75 mx-auto" alt="">
            <div class="card-body">
              <h5 class="card-title">${obj.brand}</h5>
              <p class="card-text">${obj.description}</p>
              <a href="#" class="btn btn-primary">Info</a>
            </div>
          </div>`
        cardContainer.innerHTML += newCardProduct
    }
}

populatePage()

function addItem(obj) {
    fetch(url , {
        method: "POST",
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            products.push(data)
            populatePage(obj)
        })
        .catch(err => alert(err))
}


function getInfo(id) {
    window.location.href = `infoPage.html?id=${id}`
}

function modifyItem(id) {
    window.location.href = `modifyItem.html?id=${id}`
}





// creata la pagina, bisogna mettere nella seconda pagina "add item" la sezione del crea.
// creo un form con gli stessi campi necessari per crearmi un nuovo oggetto da pushare, lo trasformo e lo POST.
// concettualmente i campi devono essere tutti obbligatori, il tasto save attivarsi una volta che 