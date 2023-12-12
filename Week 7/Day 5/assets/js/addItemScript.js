const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjNjZWMwNTgzNTAwMTg1MjJjYWUiLCJpYXQiOjE3MDIzNzIzMDMsImV4cCI6MTcwMzU4MTkwM30.XEHxsPolD6tzN9SwpjALfPfdYGounWcFkX3L9tC3VWg"
const url = "https://striveschool-api.herokuapp.com/api/product/"


async function generateObj() {
    const objName = document.getElementById("nameNewProduct").value
    const objBrand = document.getElementById("brandNewProduct").value
    const objImageUrl = document.getElementById("imageUrlNewProduct").value
    const objPrice = document.getElementById("priceNewProduct").value
    const objDescription = document.getElementById("descriptionNewProduct").value

    await fetch(url , {
        method: "POST",
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": `${objName}`,
            "description": `${objDescription}`,
            "brand": `${objBrand}`,
            "imageUrl": `${objImageUrl}`,
            "price": `${objPrice}`
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            window.location.href = "mainPage.html"
        })
        .catch(err => {
            document.getElementById("alertName").classList.remove("hidden")
            setTimeout(() =>{
                document.getElementById("alertName").classList.add("hidden")
            }, 3000)
        })
    
}

function resetForm() {
    console.log("reset is working just fine")
    document.getElementById("alertName").classList.add("hidden")
    document.getElementById("nameNewProduct").value = ""
    document.getElementById("brandNewProduct").value = ""
    document.getElementById("imageUrlNewProduct").value = ""
    document.getElementById("priceNewProduct").value = ""
    document.getElementById("descriptionNewProduct").value = ""
}


//