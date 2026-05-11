let box = document.querySelector(".box");
let yesButton = document.querySelector("#yes");
let noButton = document.querySelector("#no");
let clickHere = document.querySelector(".clickHere");
let options = document.querySelector(".options");
let number = document.querySelector(".number")
let display = document.querySelector(".display")
let amount = document.querySelector(".amount")
let tip = document.querySelector(".tip")
let total = document.querySelector(".total")


let saveAmount = 0
let saveTip = 0
let saveTotal = 0 

const numberType = ()=>{
  saveAmount = number.textContent
  amount.append(saveAmount)
  
}
const openTipCalculator = () => {
  box.style.height = "600px";
  clickHere.style.display = "none";
  yesButton.style.display = "none";
  noButton.style.display = "none";
};

const tryAgain = () => {
  clickHere.innerText = "OK , You Want To Try Again ?";
};

yesButton.addEventListener("click", openTipCalculator);
noButton.addEventListener("click", tryAgain);


number.addEventListener("click",numberType)