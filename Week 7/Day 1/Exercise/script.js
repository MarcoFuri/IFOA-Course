class User {
    constructor(_firstName, _lastName, _age, _location){
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }

    comparison(user1, user2){
        if (user1.age > user2.age){
            console.log(`${user1.firstName} is older than ${user2.firstName}`)
        } else if (user1.age < user2.age){
            console.log(`${user2.firstName} is older than ${user1.firstName}`)
        } else {
            console.log(`${user1.firstName} and ${user2.firstName} have the same age`)
        }
    }

}

const user1 = new User("Marco", "Furi", 30, "Milano")
const user2 = new User("Stefania", "Galazzo", 34, "Torino")

user1.comparison(user1, user2)

class Pet {
    constructor(_petName, _ownerName, _species, _breed){
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }

    static checkIfSameOwner(pet1, pet2){
        if (pet1.ownerName === pet2.ownerName){
            console.log(true)
        } else {
            console.log("They have different owners")
        }
    }
}

let pets = [];

function addNewPet(){
    let name = document.getElementById("petName").value;
    let owner = document.getElementById("ownerName").value;
    let species = document.getElementById("species").value;
    let breed = document.getElementById("breed").value;

    const newPet = new Pet(name, owner, species, breed)
    pets.push(newPet);
    console.log(pets)

    let li = document.createElement("li");
    li.innerText = `${name} is ${owner}'s animal. Species: ${species}. Breed: ${breed}`;
    let ul = document.querySelector("ul");
    ul.appendChild(li)
    resetForm()
}



function resetForm(){
    console.log(pets)
    document.getElementById("petName").value = "";
    document.getElementById("ownerName").value = "";
    document.getElementById("species").value = "";
    document.getElementById("breed").value = "";
}


