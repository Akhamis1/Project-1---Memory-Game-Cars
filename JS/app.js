/*-------------------------------- Constants --------------------------------*/
const cardImages =[
"./Photos/Car1.png",
"./Photos/Car1.png",

"./Photos/Car2.png",
"./Photos/Car2.png",

"./Photos/Car3.png",
"./Photos/Car3.png",

"./Photos/Car4.png",
"./Photos/Car4.png",

"./Photos/Car5.png",
"./Photos/Car5.png",

"./Photos/Car6.png",
"./Photos/Car6.png",
]
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
function startGame(){
if(timer){
return
}
messageElement.textContent="Choose Two Cars 🏎️"
timer = setInterval(function () {
duration = duration -1
durationElement.textContent = "⌛ Duration: " + duration
if(duration ===0){
clearInterval(timer)
timer =null
messageElement.textContent="Game Over ):"
}
}, 1000)
}
function handleClick(event){
if(!timer){
return
}
if(secondCard !==null){
return
}
let cardIndex= Number(event.target.id)
if(cardIndex===firstCard){
return
}
event.target.style.backgroundImage ="url(" + cardImages[cardIndex] + ")"
event.target.textContent = ""
if(firstCard === null){
firstCard =cardIndex
}
else{
secondCard =cardIndex

if(cardImages[firstCard]=== cardImages[secondCard]){
score +=1
scoreElement.textContent = "🏆 Score: " + score + " / 6"
messageElement.textContent= "Match 🏁"
if(score === 6){
clearInterval(timer)
timer =null
messageElement.textContent = "You Win :)"
}
}
else{
lives -= 1
livesElement.textContent= "⛽ Lives: " + lives
messageElement.textContent = "Wrong "
if(lives ===0){
clearInterval(timer)
timer = null
messageElement.textContent= "Game Over ):"
}
}

setTimeout(function () {

if(cardImages[firstCard]=== cardImages[secondCard]){
cardElement[firstCard].style.visibility = "hidden"
cardElement[secondCard].style.visibility = "hidden"
}
else{
cardElement[firstCard].style.backgroundImage = "none"
cardElement[secondCard].style.backgroundImage = "none"
cardElement[firstCard].textContent = "🏎️"
cardElement[secondCard].textContent = "🏎️"
}

firstCard = null
secondCard = null

}, 1000)

}
}
/*----------------------------- Event Listeners -----------------------------*/
for (let i = 0; i < cardElement.length; i++) {
cardElement[i].addEventListener("click", handleClick)
}
StartElement.addEventListener("click", startGame)
restartElement.addEventListener("click", init)
diffcultyElement.addEventListener("change", init)
init()