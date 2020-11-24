const list = document.querySelector(".list"),
listForm = document.querySelector(".list-form"),
listInput = document.querySelector(".list-input"),
listInputBtn = document.querySelector(".list-inputBtn"),
listFilter = document.querySelector(".list-filter"),
listContainer = document.querySelector(".list-container");

const LIST_LS = "list";
let listArray = [];

function saveList(){
  localStorage.setItem(LIST_LS,JSON.stringify(listArray));
}

function makeListArray(todo){
  const listObj = {
    list: todo
  }
  listArray.push(listObj);
}

function showList(todo){
  const li = document.createElement("li"),
  checkBtn = document.createElement("button"),
  delBtn = document.createElement("button");

  listContainer.appendChild(li);
  listContainer.appendChild(checkBtn);
  listContainer.appendChild(delBtn);

  li.innerText = todo;
  checkBtn.innerHTML = '<i class="far fa-check-circle"></i>';
  delBtn.innerHTML = '<i class="fas fa-minus-circle"></i>';
}

function submitListHandle(event){
  event.preventDefault();
  if(listInput.value !== ""){
    showList(listInput.value);
    makeListArray(listInput.value);
    saveList();
  }
}

function init(){
  listForm.addEventListener("submit",submitListHandle);
  
}
init();


