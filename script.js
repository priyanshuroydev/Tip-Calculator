const yesBtn = document.querySelector("#yesBtn")

const noBtn = document.querySelector("#noBtn")

const box = document.querySelector(".box")

const question = document.querySelector("p")

const yesNoButtons = document.querySelector(".yesNoButtons")



const opencalc = function(){
    box.style.height = "600px"
    question.style.display = "none"
    yesNoButtons.style.display = "none"
}

const goodbye = function(){
    box.style.height = "0px"
    question.textContent = "Okay Goodbye !!"
    yesNoButtons.style.display = "none"
}



yesBtn.addEventListener("click" , opencalc)

noBtn.addEventListener("click" , goodbye)