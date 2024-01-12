const token = "zQCzSEamZwOEJIW4eihIvjC5scck8F8wWjPbhTWmHShZdy11Qq4USneE"
const mainUrl = "https://api.pexels.com/v1/search?query="

let userImages = []
let mainImages = []
let secondaryImages = []


function generateUserImages() {
    let valueSearched = document.getElementById("searchValue").value;
    fetch(mainUrl + valueSearched, {
        headers: {"Authorization": token}
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            userImages = data["photos"]
            console.log(userImages)
            populateWithImages(userImages)
        })
        .catch(err => alert(`Error ${err}, try again!`))
        
}

function populateWithImages(array) {
    let cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = ""

    array.forEach((element) => {
        
        let newCard = `
        <div class="singleCard col-md-4">
        <div class="card mb-4 shadow-sm">
            <a onclick="createDetailPage('${element}')"><img src="${element.src.large}" alt="image searched" class="img-fluid"></a>
           
              <div class="card-body">
                <a href="${element.url}"><h5 class="card-title">Lorem Ipsum</h5></a>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="populateModal('${element.src.large}')">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary" id="card${element.id}" onclick="hideCard(this.id)">
                      Hide
                    </button>
                  </div>
                  <small class="text-muted">${element.id}</small>
                </div>
              </div>
            </div>
          </div>
        `
    cardsContainer.innerHTML += newCard
        
    })
}

function hideCard(id) {
    const cardSelected = document.getElementById(id);
    console.log(cardSelected)
    const cardToHide = cardSelected.closest(".singleCard")
    console.log(cardToHide)
    cardToHide.classList.add("hide")
}


function generateMainImages() {
    let cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = ""

    fetch(mainUrl + "dog", {
        headers: {"Authorization": token}
    })
        .then(response => response.json())
        .then(data => {
            mainImages = data["photos"]
            populateWithImages(mainImages)
        })
        .catch(err => alert(`Error ${err}, try again!`))
        
}

function generateSecondaryImages() {
    let cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = ""

    fetch(mainUrl + "cat", {
        headers: {"Authorization": token}
    })
        .then(response => response.json())
        .then(data => {
            secondaryImages = data["photos"]
            populateWithImages(secondaryImages)
        })
        .catch(err => alert(`Error ${err}, try again!`))
}


function populateModal(url) {
    const modal = document.querySelector(".modal-body");
    modal.innerHTML = ""
    const img = document.createElement("img")
    img.setAttribute("src", url)
    img.classList.add("img-fluid")
    modal.appendChild(img)
}

function createDetailPage(obj) {
    localStorage.setItem("obj", obj)
    window.location.href = "detailPage.html"
}

