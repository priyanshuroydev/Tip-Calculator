let box = document.querySelector(".box");
let yesButton = document.querySelector("#yes");
let noButton = document.querySelector("#no");
let clickHere = document.querySelector(".clickHere");
let options = document.querySelector(".options");

const openTipCalculator = () => {
    box.style.height = "600px";
    clickHere.style.display = "none";
    yesButton.style.display = "none";
    noButton.style.display = "none";
};

const tryAgain = () => {
    clickHere.innerText = "OK , You Want To Try Again ?";
    yesButton.style.display = "none";
};

yesButton.addEventListener("click", openTipCalculator);
noButton.addEventListener("click", tryAgain);