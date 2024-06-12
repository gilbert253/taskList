const list = document.getElementById("list")
const header = document.getElementById("header")
const listDiv = document.getElementById("list-div")
const input = document.getElementById("input")
const btn = document.getElementById("button")
const radio = document.getElementById("radio")

const addTask = () => {
let newTask = document.createElement("li")
newTask.innerHTML = input.value
listDiv.appendChild(newTask)
let clearMark = document.createElement("span")
clearMark.innerHTML = "\u00d7"
newTask.appendChild(clearMark)
}

btn.addEventListener("click", addTask)

input.value = ""

const clearFunction = () => {
    
}



listDiv.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
  } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    } 
},false)
