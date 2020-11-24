const list = document.querySelector(".list"),
listForm = document.querySelector(".list-form"),
listInput = document.querySelector(".list-input"),
listInputBtn = document.querySelector(".list-inputBtn"),
listFilter = document.querySelector(".list-filter"),
listToDos = document.querySelector(".list-todos");

const LIST_LS = "list";
const CHECKED = "checked";
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

function checkList(event){
  const checkedBtn = event.target;
  const checkedListContainer = checkedBtn.parentNode;
  const checkedList = checkedListContainer.firstChild;

  checkedList.classList.toggle(CHECKED);
}

function deleteList(event){
  const deletedBtn = event.target;
  const deletedListContainer = deletedBtn.parentNode;
  const deletedList = deletedListContainer.firstChild;

  const deletedIndex = listArray.findIndex(function(todo){
    return todo.list === deletedList.innerText;
  });
  listArray.splice(deletedIndex,1);
  saveList();
  deletedListContainer.remove();
}

function showList(todo){
  const listContainer = document.createElement("div"),
  listToDo = document.createElement("li"),
  checkBtn = document.createElement("button"),
  delBtn = document.createElement("button");

  listToDos.appendChild(listContainer);
  listContainer.appendChild(listToDo);
  listContainer.appendChild(checkBtn);
  listContainer.appendChild(delBtn);

  listToDo.innerText = todo;
  checkBtn.innerHTML = '<i class="far fa-check-circle"></i>';
  delBtn.innerHTML = '<i class="fas fa-minus-circle"></i>';

  checkBtn.addEventListener("click",checkList);
  delBtn.addEventListener("click",deleteList);
}

function submitListHandle(event){
  event.preventDefault();
  if(listInput.value !== ""){
    showList(listInput.value);
    makeListArray(listInput.value);
    saveList();
    listInput.value = "";
  }
}

function init(){
  listForm.addEventListener("submit",submitListHandle);
  if(localStorage.getItem(LIST_LS) !==null){
    const loadedListArray = JSON.parse(localStorage.getItem(LIST_LS));

    loadedListArray.forEach(function(todo){
      showList(todo.list);
      makeListArray(todo.list);
    });
  }
}
init();


