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
let choice = +prompt("Do you want to go into the (1) library, (2) basement, or (3) Gymnasium?")
if (choice == 1) {
    let image = document.getElementById("bg")
    //   document.getElementById("bg").src="./image/library.jpg"
    image.style.backgroundImage = "url('./image/library.jpg')";
    image.style.backgroundRepeat = "no-repeat";
    image.style.backgroundPosition = "center";  
    // document.body.style.background = "url('./image/library.jpg')";

    library()
}
if (choice == 2) {
    basement()
}

if(choice == 3) {
    gymnasium()
}
}

function continue_game() {

    let choice = +prompt("Do you want to go into the (1) library, (2) basement, or (3) Gymnasium?")
    if (choice == 1) {
        library()
    }
    if (choice == 2) {
        basement()
    }
    if(choice == 3) {
        gymnasium()
    }
}

function library() {
    alert("Welcome To The Library!")
    alert("Find a way to escape without being killed by a ghost!")
    let option = +prompt("You see a creepy old book on a dusty table. Do you (1) open it or (2) leave it alone?")
    
    if (option == 1){
        alert("You open the book and find a key inside.")
        let run = +prompt("You walk around and find a exit, but you see a ghost nearby, do you (1) run to the exit or (2) hide till the ghost leaves?")
        if (run == 1) {
            alert("You run for the exit but the ghost spots you and you DIE.")
            alert("You Failed To Escape!")
            let cont = +prompt("Would you like to (1) continue or (2) leave?") 
            if (cont == 1) {
                continue_game()
            }
            if (cont == 2) {
                alert("The end. Thanks for playing!")
            }
        }
        if (run == 2) {
            alert("The ghost leaves, you find your way to the exist and escape.")
            alert("You Survived The Library!")
            let cont = +prompt("Would you like to (1) continue or (2) leave?") 
            if (cont == 1) {
                continue_game()
            }
            if (cont == 2) {
                alert("The end. Thanks for playing!")
            }
        }
        /*  alert("A ghost emerges from the book and scares you to death!")
        alert("The End. Thanks for Playing!") */
    }

    if (option == 2) {
        alert("You ignore the book and walk around the library.")
        alert("You find the exit but it's locked. You search for the key and see a ghost near the creepy book you saw before.")
        let escape = +prompt("You realize the key is in the book, do you (1) wait for the ghost to leave and snatch the book or (2) sneak behind the ghost and snatch the book or (3) Ignore the ghost and look for another exit.")

        if (escape == 1) {
            alert("The ghost leaves. You grab the book and find the key inside.")
            alert("You search for the exit, but you see a shiny mysterious bottle on the ground.")
            let die = +prompt("Do you (1) ignore it or (2) pick it up?")
            if (die == 1) {
                alert("you find your way to the exit and you're able to escape.")
                alert("You Survived The Library!")
                let cont = +prompt("Would you like to (1) continue or (2) leave?") 
                if (cont == 1) {
                    continue_game()
                }
                if (cont == 2) {
                    alert("The End. Thanks for playing!")
                }
            }
            if (die == 2) {
                alert("You pick the bottle and accidentally dropped it, alerting the ghost.")
                alert("You run for the exit but the ghost spots you and you DIE.")
                alert("You Failed To Escape!")
                let cont = +prompt("Would you like to (1) continue or (2) leave?") 
                if (cont == 1) {
                    continue_game()
                }
                if (cont == 2) {
                    alert("The end. Thanks for playing!")
                }

            }

                
            /*  alert("You quietly leave the library and find the exit. You survive!")
            alert("The End. Thanks for Playing!") */

        }

        if (escape == 2) {
            alert("The ghost sees you and rushes towards you and you DIE.")
            alert("You Failed To Escape!")
            let cont = +prompt("Would you like to (1) continue or (2) leave?") 
            if (cont == 1) {
                continue_game()
            }
            if (cont == 2) {
                alert("The end. Thanks for playing!")
            }
        }

        if (escape == 3) {
            alert("You walk to the opposite end of library and find another exit.")
            alert("In order to open it you must solve a riddle to unlock the door without alerting the ghost.")
            alert("The riddle is: 'I don’t have eyes, but once I did see. Once I had thoughts, but now I’m white and empty. What am I?'")
            let answer = +prompt("Is it (1) a skull or (2) a candle")
            if (answer == 1) {
                alert("You solve the riddle and the door unlocks. You escape without alerting the ghost and survive.")
                let cont = +prompt("Would you like to (1) continue or (2) leave?") 
                if (cont == 1) {
                    continue_game()
                }
                if (cont == 2) {
                    alert("The end. Thanks for playing!")
                }

            }
            if (answer == 2) {
                alert("You picked the wrong answer.")
                alert("The ghost spots you and you DIE.")
                alert("You Failed To Escape!")
                let cont = +prompt("Would you like to (1) continue or (2) leave?") 
                if (cont == 1) {
                    let image = document.getElementById("bg")
                    continue_game()
                }
                if (cont == 2) {
                    alert("The end. Thanks for playing!")
                }

            }

        }
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