let values = [];


function setData() {
    if (localStorage.getItem("data") !== null){
        document.querySelector(".previousValue").innerHTML = "";
    }
    let name = document.getElementById("name").value;
    if (name === ""){
        return alert("You must fill the field 'name' first")
    }
    localStorage.setItem("data", name);
    values.push(name);

    let previousValue = document.querySelector(".previousValue");
    let p = document.createElement("p");
    p.innerText = `Welcome, ${name}!`;
    previousValue.appendChild(p)

    document.getElementById("name").value = "";
}

function deleteData() {
    if (values.length > 0){
        document.querySelector(".previousValue").innerHTML = "";
        localStorage.clear()
    }
}

let time = 1;

if (sessionStorage.getItem("time") !== null){
    time = sessionStorage.getItem("time")
}

setInterval(function(){
    sessionStorage.setItem("time", time);
    document.querySelector(".counter").innerText = sessionStorage.getItem("time");
    time++
}, 1000)

