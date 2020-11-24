const title = document.querySelector(".title"),
nameDeleteBtn = document.querySelector(".name-delBtn"),
nameForm = document.querySelector(".name-form"),
nameInput = document.querySelector(".name-input"),
nameInputBtn = document.querySelector(".name-inputBtn");

const USER_NAME_LS = "userName";
const SHOWING = "showing";

function showName(name){
  title.innerText = `Hellow lovely ${name}`;
  nameDeleteBtn.classList.add(SHOWING);
}

function saveName(name){
  localStorage.setItem(USER_NAME_LS,name);
}

function askForName(){
  nameDeleteBtn.classList.remove(SHOWING);
  title.innerText = "What is your name?";
  nameInput.placeholder = "Write your name";
}

function submitNameHandle(event){
  event.preventDefault();
  if(nameInput.value !==""){
    showName(nameInput.value);
    saveName(nameInput.value);
    nameInput.value = "";
    nameForm.classList.remove(SHOWING);
  }
}

function resetUserLS(){
  localStorage.removeItem(USER_NAME_LS);
  nameForm.classList.add(SHOWING);
  askForName();
}

function init(){
  if(localStorage.getItem(USER_NAME_LS) === null){
    nameForm.classList.add(SHOWING);
    askForName();
    nameForm.addEventListener("submit",submitNameHandle);
  }else{
    nameForm.classList.remove(SHOWING);
    showName(localStorage.getItem(USER_NAME_LS));
  }
  nameDeleteBtn.addEventListener("click",resetUserLS);
}
init();



