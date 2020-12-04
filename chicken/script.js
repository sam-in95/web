const aBtn = document.querySelector(".aaa");
const bBtn = document.querySelector(".bbb");

function clickAlert(text) {
  const whatFavFood = prompt("도니 혹시.. 치킨먹은거야..? < yes / no >");

  const myFavFood = ["pizza", "coke", "coffee"]
  // if(myFavFood.includes(whatFavFood)){
  //   alert("Me too");
  // }else{
  //   alert("Not my type");
  // }
  if (whatFavFood.includes("yes")) {
    alert("나도... 치킨 좋아하는데...");
  } else {
    alert("치킨.. 먹고싶다..");
  }
}

function clickChange() {
  const hasClass = bBtn.classList.contains("clicked");
  if (hasClass) {
    bBtn.classList.remove("clicked");
  } else {
    bBtn.classList.add("clicked");
  }
}

function init() {
  aBtn.addEventListener("click", clickAlert);
  bBtn.addEventListener("click", clickChange);
}
init();

const ccc = {
  name: "sam",
  age: 10,
  favFood: [
    "pizza",
    "coke"
  ]
}

if (ccc.favFood.includes("pizza")) {
  console.log("Me too");
} else {
  console.log("Are you not like pizza?");
}