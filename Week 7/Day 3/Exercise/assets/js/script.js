fetch("https://striveschool-api.herokuapp.com/books")
    .then(response => response.json())
    .then(data => createLibrary(data))


function createLibrary(data) {
    localStorage.clear()
    console.log(data)
    let container = document.getElementById("containerCards");
    data.forEach((element) => {
        const card =    `<div class="card position-relative bg-dark text-light" id="book${element.asin}" style="width: 18rem;">
                            <img src="" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text mb-5"></p>
                                <a href="#" class="btn btn-primary position-absolute bottom-0 mb-3" id="btn${element.asin}" onclick="addToCart(this.id)">Add to Cart</a>
                                <a href="#" class="btn btn-danger offset-2 position-absolute bottom-0 end-0 my-3 mx-4" id="del${element.asin}" onclick="deleteElement(this.id)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                              </svg></a>
                            </div>
                        </div>`

        container.innerHTML += card;

        const bookImg = document.querySelector(`#book${element.asin} img`);
        bookImg.setAttribute("src", element.img)

        const bookTitle = document.querySelector(`#book${element.asin} .card-title`);
        bookTitle.innerText = element.title

        const bookPrice = document.querySelector(`#book${element.asin} p`);
        bookPrice.innerText = `${element.price}€`
    })
}


let cartBooks = [];

function addToCart(id) {
    
    let book = document.getElementById(id)
    let bookSelected = book.closest(".card");
    let idBook = bookSelected.getAttribute("id");
    if (cartBooks.includes(idBook)){
        return;
    } else {
        cartBooks.push(idBook)
        console.log(cartBooks)
    }

    let bookTitle = document.querySelector(`#${idBook} .card-title`).innerText;
    let bookPrice = document.querySelector(`#${idBook} .card-text`).innerText;

    let cartProduct = ` <a href="#" class="list-group-item list-group-item-action py-3 lh-sm" id="cart-${id}">
    <div class="d-flex w-100 align-items-center justify-content-between">
      <strong class="mb-1"></strong>
      <button class="btn btn-outline-danger btn-sm" onclick="removeFromCart(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
      </svg></button>
    </div>
    <div class="price col-10 mb-1 small"></div>
  </a>`

    let yourCart = document.querySelector(".list-group");
    yourCart.innerHTML += cartProduct
    document.querySelector(`#cart-${id} strong`).innerText = bookTitle
    document.querySelector(`#cart-${id} .price`).innerText = bookPrice

    localStorage.setItem("cart", JSON.stringify(idBook))
}


function deleteElement(id) {
    console.log(id)
    let book = document.getElementById(id);
    let bookSelected = book.closest(".card")
    bookSelected.style.display = "none";
    let idBook = bookSelected.getAttribute("id");
    if (cartBooks.includes(idBook)){
        localStorage.removeItem(idBook)
    }
}


function removeFromCart(button) {
    console.log(button)
    let bookRemovedFromCart = button.closest(".list-group-item")
    bookRemovedFromCart.style.display = "none"
}