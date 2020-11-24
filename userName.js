const nameHeader = document.querySelector(".title");
const nameSection = document.querySelector(".name");

const USER_NAME_LS = "userName";

function askForName(){
  const nameAsk = document.createElement("h1");
  const nameForm = document.createElement("form");
  const nameInput = document.createElement("input");
  const nameInputBtn = document.createElement("button");


  nameHeader.appendChild(nameAsk);
  nameSection.appendChild(nameForm);
  nameForm.appendChild(nameInput);
  nameForm.appendChild(nameInputBtn);

  nameForm.classList.add ("name-form");
  nameInput.classList.add("name-input");
  nameInputBtn.classList.add("name-inputBtn");

  nameAsk.innerText = "What is your name?";
  nameInput.placeholder = "Write your name";
  nameInputBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i>';

}

function init(){
  if(localStorage.getItem(USER_NAME_LS) === null){
    askForName();
  }
  
}
init();