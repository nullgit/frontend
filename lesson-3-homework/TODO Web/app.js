let button = document.querySelector("button")
let input = document.querySelector("input")
let tasks = document.querySelector(".tasks")
let tasksBoard = document.querySelector(".tasksBoard")
let clear = document.querySelector("#clear")

button.onclick = function() {
    let str = input.value
    if (str.length === 0) {
        return;
    }
    let text = document.createElement("span");
    text.innerText = str
    
    let li = document.createElement("li")

    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.onclick = function(event) {
        toggleClass(event.target.parentNode.lastElementChild, "deleteline")
    }

    let deletebox = document.createElement("span")
    deletebox.className = "delete"
    deletebox.innerHTML = "x";
    deletebox.onclick = function() {
        let parent = deletebox.parentNode
        tasks.removeChild(parent)
    }

    li.appendChild(deletebox)
    li.appendChild(checkbox)
    li.appendChild(text)

    tasks.appendChild(li)
    input.value = ""
}

clear.onclick = function() {
    tasks.innerHTML = ""
}

function addClass(obj , cn){
    if(!hasClass(obj , cn)){
        obj.className += " " + cn;
    }
}

function hasClass(obj , cn){
    var reg = new RegExp("\\b"+cn+"\\b");
    return reg.test(obj.className);
}

function removeClass(obj , cn){
    var reg = new RegExp("\\b"+cn+"\\b");
    obj.className = obj.className.replace(reg , "");
}

function toggleClass(obj , cn) {
    if(hasClass(obj , cn)){
        removeClass(obj , cn);
    }else{
        addClass(obj , cn);
    }
}
