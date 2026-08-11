/*-------------------------------- Constants --------------------------------*/
const cardImages =[
"../Photos/Car1.png",
"../Photos/Car1.png",

"../Photos/Car2.png",
"../Photos/Car2.png",

"../Photos/Car3.png",
"../Photos/Car3.png",

"../Photos/Car4.png",
"../Photos/Car4.png",

"../Photos/Car5.png",
"../Photos/Car5.png",

"../Photos/Car6.png",
"../Photos/Car6.png",
]
console.log(cardImages)
/*---------------------------- Variables (state) ----------------------------*/

let firstCard
let secondCard
let score
let duration
let lives
let timer

/*------------------------ Cached Element References ------------------------*/
const messageElement = document.querySelector("#message")
const cardElement = document.querySelectorAll(".card")
const scoreElement =document.querySelector("#score")
const durationElement =document.querySelector("#duration")
const diffcultyElement =document.querySelector("#difficulty")
const livesElement =document.querySelector("#lives")
const restartElement =document.querySelector("#restart-btn")
const StartElement =document.querySelector("#start-btn")



console.log( messageElement,cardElement,scoreElement,durationElement,diffcultyElement,livesElement,restartElement,StartElement)
/*-------------------------------- Functions --------------------------------*/
function init(){
clearInterval(timer)
timer = null
firstCard = null
secondCard = null
score = 0

cardImages.sort(function (){
    return Math.random()- 0.5
})

if(diffcultyElement.value==="easy"){
    duration = 60
    lives = 10
}
else if(diffcultyElement.value==="medium"){
    duration = 45
    lives = 5
}
else{
    duration = 30
    lives =3
}

for(let i=0;i<cardElement.length;i++){
cardElement[i].textContent= "🏎️"
cardElement[i].style.backgroundImage = "none"
cardElement[i].style.visibility = "visible"
}
scoreElement.textContent ="🏆 Score: " + score + " / 6"
durationElement.textContent = "⌛ Duration: " + duration
livesElement.textContent = "⛽ Lives: " + lives
messageElement.textContent = "Press Start 🏁"
}
