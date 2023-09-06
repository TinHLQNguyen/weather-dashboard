let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `The RobotHub is cool, ${storedName}`;
}

const myImage = document.querySelector("img");

function changeImage() {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/RobotHub-v4.png") {
    myImage.setAttribute("src", "images/v4_page_logo_retina.png");
  } else {
    myImage.setAttribute("src", "images/RobotHub-v4.png");
  }
};

// 2 ways to add event handler using onclick & addEventListener("click",)
// myImage.onclick = function(){
//   changeImage();
// };
myImage.addEventListener("click", function(){
  changeImage();
});

let myButton = document.querySelector("button");
myButton.onclick = function(){
  setUserName();
};

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `The RobotHub is cool, ${myName}`;
  }
}
