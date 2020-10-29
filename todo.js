const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = form.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.inner = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(){
    preventDefault();
    const currentValue=toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const toDos = localStorage.getItem();
    if(toDos != null){

    } else {

    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit
}

init();