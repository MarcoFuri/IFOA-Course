const tokenInfo = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjNjZWMwNTgzNTAwMTg1MjJjYWUiLCJpYXQiOjE3MDIzNzIzMDMsImV4cCI6MTcwMzU4MTkwM30.XEHxsPolD6tzN9SwpjALfPfdYGounWcFkX3L9tC3VWg"
const urlInfo = "https://striveschool-api.herokuapp.com/api/product/"


const urlParams = new URLSearchParams(window.location.search)
const product = urlParams.get("id")

window.onload = getData()

async function getData() {
    await fetch(urlInfo + product , {
        method: "GET",
        headers: {
            "Authorization": tokenInfo,
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        renderPage(data)
    })
    .catch(err => console.log(err))
}



function renderPage(data) {
    console.log(data)
    const cardInfoContainer = document.querySelector(".cardInfoContainer")
    const card = `<div class="col-7 productImg">
    <img src="${data.imageUrl}" alt="" class="w-75 mt-5 img-fluid">
        </div>
        <div class="col productInfo mt-5">
            <p class="m-1">
                <div><span class="fw-bold">Product Name: </span>${data.name}</div>
                <br>
                <div><span class="fw-bold">Brand: </span>${data.brand}</div>
                <br>
                <div><span class="fw-bold">Description: </span>${data.description}</div>
                <br>
                <p class="btn btn-primary mt-3 py-1 px-2">${data.price}€</p>
                <p class="description w-50">${data.description}. Prodotto come nuovo, controllato da Amazon</p>
            </p>
        </div>
    `
    cardInfoContainer.innerHTML = card
}