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

saveFunction()

const clearFunction = () => {
    
}



listDiv.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
  } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveFunction()
    } 
},false)

const saveFunction = () => {
    localStorage.setItem("data", listDiv.innerHTML)
    }
const showData = () => {
listDiv.innerHTML = localStorage.getItem("data")
}
showData()

/*
need to have a growing list of tasks
ability to click x to delete
ability to click check and cross it out
date field would be good


if input is submitted a task with that text is created
input text should be saved on local storage
if check radio is clicked then strikethrougho on text
if x is clicked then task is deleted
*/
