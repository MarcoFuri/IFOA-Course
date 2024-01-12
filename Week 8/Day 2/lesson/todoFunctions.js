import {todoList} from "./list.js"

const todoList2 = [
    {"19:30":"Preparare la cena"}
]

let listGlobal = [...todoList, ...todoList2]

function showTodo() {
    
    const list = document.getElementById("list")
    list.innerHTML = ""
    listGlobal.forEach((el) => {
        const newLi = document.createElement("li")
        const newButton = document.createElement("button")
        newButton.innerText = "X"
        newButton.addEventListener("click", () => {
            deleteTodo(Object.keys(el), Object.values(el))
        })
        newLi.innerHTML = Object.keys(el) + "-" + Object.values(el) + " "
        newLi.appendChild(newButton)
        list.appendChild(newLi)
    })
}
showTodo()

function addNewTodo() {
    const newTodo = document.getElementById("newTodoInput").value
    const newTodoTime = document.getElementById("todoTime").value
    if (newTodo === "" || newTodoTime === ""){
        return alert("Alcuni campi non sono completi")
    }
    listGlobal.push({[newTodoTime]: newTodo})
    listGlobal.sort((a,b) => {
        return Object.keys(a) < Object.keys(b) ? -1 : 1
    })
    showTodo()
}

function deleteTodo(date, task) {
    let tiHoBeccato = 0
    listGlobal.find((el, index) => {
        const key = Object.keys(el)[0]
        const value = Object.values(el)[0]
        if (key == date && value == task) {
            tiHoBeccato = index
        }
    })
    listGlobal.splice(tiHoBeccato, 1)
    return showTodo()
}

export {
    showTodo,
    addNewTodo
}