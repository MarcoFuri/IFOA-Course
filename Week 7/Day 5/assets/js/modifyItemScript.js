const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjNjZWMwNTgzNTAwMTg1MjJjYWUiLCJpYXQiOjE3MDIzNzIzMDMsImV4cCI6MTcwMzU4MTkwM30.XEHxsPolD6tzN9SwpjALfPfdYGounWcFkX3L9tC3VWg"
const url = "https://striveschool-api.herokuapp.com/api/product/"


const urlParams = new URLSearchParams(window.location.search)
const product = urlParams.get("id")
let productInfo = {}

window.onload = getData()

async function getData() {
    await fetch(url + product , {
        method: "GET",
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        productInfo = data
        fillInputs(data)
    })
    .catch(err => console.log(err))
}

function fillInputs(data) {
    const objName = document.getElementById("nameProduct").value = data.name
    const objBrand = document.getElementById("brandProduct").value = data.brand
    const objImageUrl = document.getElementById("imageUrlProduct").value = data.imageUrl
    const objPrice = document.getElementById("priceProduct").value = data.price
    const objDescription = document.getElementById("descriptionProduct").value = data.description
}

function resetChanges() {
    document.getElementById("nameProduct").value = productInfo.name
    document.getElementById("brandProduct").value = productInfo.brand
    document.getElementById("imageUrlProduct").value = productInfo.imageUrl
    document.getElementById("priceProduct").value = productInfo.price
    document.getElementById("descriptionProduct").value = productInfo.description
}

function modifyObj() {
    const objName = document.getElementById("nameProduct").value 
    const objBrand = document.getElementById("brandProduct").value 
    const objImageUrl = document.getElementById("imageUrlProduct").value 
    const objPrice = document.getElementById("priceProduct").value 
    const objDescription = document.getElementById("descriptionProduct").value 

    const objModified = {
        name: objName,
        brand: objBrand,
        imageUrl: objImageUrl,
        price: objPrice,
        description: objDescription
    }

    fetch(url + product , {
        method: "PUT",
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objModified)
    })
    .then(res => {
        console.log(res.json())
        window.location.href = "mainPage.html"
    })
    .catch(err => console.log(err))
}

function deleteItem() {
    if (confirm("Are you sure you want to delete this item?") == true){
        fetch(url + product , {
            method: "DELETE",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            console.log(res.json())
            window.location.href = "mainPage.html"
        })
        .catch(err => console.log(err))
        
    } else return
}