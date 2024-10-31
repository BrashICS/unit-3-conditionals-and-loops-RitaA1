/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/



/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function user() {
let age = Number(prompt("what is your age"))
if (age >= 60) {
    console.log(`You qualify for the senior discount!`)
}

if (age < 16) {
    console.log(`You're not enough to drive yet`)

}

if (age == 44) {
    console.log("So is Mr. Squirrel!")
}

let user_name = prompt("what is your name?")

if (user_name == "Mr. Squirrel") {
    console.log("🐿️")
}
if (user_name.length > 7) {
    console.log("You have a long name.")
}

let length = +(prompt("How many characters does your name have?"))
if (length == user_name.length) {
    console.log("That's correct! ✔️")
}
if (length > user_name.length) {
    console.log("Too high ✖️")
}

if (length < user_name.length) {
    console.log("Too low ✖️")
}
}


// Spooky Game
document.getElementById("start_game").addEventListener("click", startGame);

function startGame() {
let user_name = prompt("What is your name?")
alert(`Welcome, ${user_name}, to Haunted St. Matthew HS!`)
let choice = +prompt("Do you want to go into the (1) library or (2) basement?")
if (choice == 1) {
    library()
}
if (choice == 2) {
    basement()
}
}

function library() {
    let option = +prompt("You see a creepy old book on a dusty table. Do you (1) open it or (2) leave it alone?")
    
    if (option == 1){
        alert("A ghost emerges from the book and scares you to death!")
        alert("The End. Thanks for Playing!")
    }

    if (option == 2) {
        alert("You quietly leave the library and find the exit. You survive!")
        alert("The End. Thanks for Playing!")
    }

}


function basement() {
    let option = +prompt("You hear strange noises. Do you (1) investigate or (2) run away?")
    
    if (option == 1){
        alert("You discover a car trunk filled with candy!")
        alert("The End. Thanks for Playing!")
    }

    if (option == 2) {
        alert("You trip and fall... The ghost catches you!")
        alert("The End. Thanks for Playing!")
    }

}