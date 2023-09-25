let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
  SetUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `The RobotHub is cool, ${storedName}`;
}

const myImage = document.querySelector("img");

function ChangeImage() {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/RobotHub-v4.png") {
    myImage.setAttribute("src", "images/v4_page_logo_retina.png");
  } else {
    myImage.setAttribute("src", "images/RobotHub-v4.png");
  }
};

// 2 ways to add event handler using onclick & addEventListener("click",)
// myImage.onclick = ChangeImage
myImage.addEventListener("click", ChangeImage);

const para = document.querySelector(".test");

para.addEventListener("click", UpdateName);

function UpdateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Player 1: ${name}`;
}

let myButton = document.querySelector("button");
myButton.onclick = SetUserName

function SetUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    SetUserNameetUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `The RobotHub is cool, ${myName}`;
  }
}

// document.addEventListener("DOMContentLoaded", RunJSExampleButton);
// function RunJSExampleButton(){
//   const button = document.querySelector("#js-button");
//   button.addEventListener("click", CreateParagraph);
// }

const button = document.querySelector("#js-button");
button.addEventListener("click", CreateParagraph);

function CreateParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}