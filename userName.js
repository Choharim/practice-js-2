const title = document.querySelector("h1"),
nameForm = document.querySelector(".name-form"),
nameInput = document.querySelector(".name-input"),
nameInputBtn = document.querySelector(".name-inputBtn");

const USER_NAME_LS = "userName";
const SHOWING = "showing";

function saveName(name){
  localStorage.setItem(USER_NAME_LS,name);
}

function askForName(){
  title.innerText = "What is your name?";
  nameInput.placeholder = "Write your name";
}

function submitHandle(event){
  event.preventDefault();
  if(nameInput.value !==""){
    saveName(nameInput.value);
  }
}

function init(){
  if(localStorage.getItem(USER_NAME_LS) === null){
    nameForm.classList.add(SHOWING);
    askForName();
    nameForm.addEventListener("submit",submitHandle);
  }

}
init();


