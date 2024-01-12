// const student = "Mario Rossi"
//
// localStorage.setItem("studentLocal", student);
//
// sessionStorage.setItem("studentSess", student);
//
// console.log(localStorage.getItem("studentLocal"))
// console.log(sessionStorage.getItem("studentSess"))
//
//
// localStorage.removeItem("studentLocal")
// sessionStorage.removeItem("studentSess")
//


const student = {
    "name": "Mario",
    "surname": "Rossi",
    "age": 25,
    "hobbies": [
        "soccer",
        "volley",
        "basket"
    ]
}

const studentJSON = JSON.stringify(student);
console.log(studentJSON);
sessionStorage.setItem("student", studentJSON)

const studentPARSE = JSON.parse(sessionStorage.getItem("student"))
console.log(studentPARSE)



let dataCall = new XMLHttpRequest();
dataCall.onload = function() {
    console.log(dataCall.response)
}
dataCall.open("get", "https://jsonplaceholder.typicode.com/users");
dataCall.send()


fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .then(data => {
        console.log(data);
        data.forEach(element => {
            console.log(element.name)
        })
    })
.catch(error => console.log(error))