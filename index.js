
let diceOne = document.querySelector('#diceOne')
let diceTwo = document.querySelector('#diceTwo')
let finalMessage = document.querySelector('section h1')

let diceUrl = [

    "./Dice/Face-1.png",
    "./Dice/Face-2.png",
    "./Dice/Face-3.png",
    "./Dice/Face-4.png",
    "./Dice/Face-5.png",
    "./Dice/Face-6.png",

]

function rollADice(){

    let diceOneIndex = Math.floor(Math.random() * 6)
    let diceTwoIndex = Math.floor(Math.random() * 6)

    diceOne.setAttribute('src' , diceUrl[diceOneIndex])
    diceTwo.setAttribute('src' , diceUrl[diceTwoIndex])

    finalMessage.innerText = whoWon(diceOneIndex, diceTwoIndex)

}

function whoWon(diceOne, diceTwo){

    if(diceOne === diceTwo) { return "Is a Draw Both players Won Roll the dice again!!" }
    else if(diceOne > diceTwo){ return "Player A won the game!" }
    else{return "Player B won the game"}

}

