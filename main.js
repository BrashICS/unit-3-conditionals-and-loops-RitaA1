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

document.getElementById("guess").addEventListener("click", guess_10)


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

// if statements
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


// else if statements

// Setup the menu
function menu() {
    let message = `Hi! Please make a selection:
    1 - Play
    2 - Options
    3 - DLC
    4 - Check for Updates
    5 - Exit
    `
    // Prompt with the menu
    let selection = Number(prompt(message));

    if (selection == 1) {
        console.log(`Let's Play!`)
        let level = +prompt("what level would you like to play? (1) Easy, (2) medium, or (3) hard?")
        if (level == 1) {
        console.log("You selected the easy route.")
        }
        else if (level == 2) {
            console.log("Most people select medium.")
        }
        else if (level == 3) {
            console.log("I see you like a challenge!")
        }

        else {
            console.log("Select again!")
            let selection = +prompt(`Select Again! ${message}`);
            selection
        }
    }

    else if (selection == 2) {
        console.log("You selected Options.")
    }

    else if (selection == 3) {
        console.log("No new DLC at this time.")
    }

    else if (selection == 4) {
        console.log("Everything is up to date.")
    }

    else if (selection == 5) {
        console.log("Bye!")
    }

    else {
        alert("Select again!")
        let selection = +prompt(`${message}`);
        selection
    }
}


function greeting(hour) {
    if ((hour >= 0 ) && (hour <= 11)) {
        return("Good morning!")
    }

    else if ((hour >= 12 ) && (hour <= 17)) {
        return("Good afternoon!")
    }

    else if ((hour >= 18 ) && (hour <= 23)) {
        return("Good evening!")
    }

    else {
        return("Invalid hour!")
    }

}

function two_digit() {
    let value  = randInt(1, 10)
    console.log(value)

    if (value == 0) {
        return("0")
    }

    if( value % 2 == 0) {
        return("Even")
    }

    if (value % 2 != 0) {
        return ("Odd")
    }

    if ((value % 2 == 0) && (value % 3 == 0)) {
        return ("6")
    }

    if ( value % value == 0) {
        return("Prime")
    }
}

// else statement practice

// Part one
function is_number(num) {
    if (typeof num == "number"){
        return ("True")
    }

    else {
        return("False")
    }
}


//Part Two
function which_day(n) {
    if (is_number(n) == "number") {
        if (n == 1) {
            return(` "Sunday" `)
        }

        else if (n == 2) {
            return(` "Monday" `)
        }

        else if (n == 3) {
            return(` "Tuesday" `)
        }

        else if (n == 4) {
            return(` "Wednesday" `)
        }

        else if (n == 5) {
            return(` "Thursday" `)
        }

        else if (n == 6) {
            return(` "Friday" `)
        }

        else if (n ==7) {
            return(` "Saturday" `)
        }

        else {
            return("Invalid value")
        }
    }

    else {
        return("Invalid type.")
    }
}


//Part Three

function guess_10() {
    let rnd = randInt(1, 10)
    let guess = +prompt("Select a number from 1 to 10")
    
    if (guess == rnd) {
        alert("You Guessed The Correct Number")
    }

    else if ((guess < 1) || (guess > 10)) {
        alert(`You guessed out of the range given, the hidden number was ${rnd}`)
    }

    else if ((guess > rnd) && (guess <= 10)) {
        alert(`Your guess was too high. The correct number is ${rnd}`)
    }

    else if ((guess < rnd) && (guess >= 1)) {
        alert(`Your guess was too low. The correct number is ${rnd}`)
    }

    else {
        alert("There was an error!") 
    }
}



/* Spooky Game */

/* Event Listeners */
document.getElementById("start_game").addEventListener("click", startGame);

/* Functions */
function startGame() {
    let user_name = prompt("What is your name?")
    alert(`Welcome, ${user_name}, to Haunted St. Matthew HS!`)
    let choice = +prompt("Do you want to go into the (1) library, (2) basement, or (3) gymnasium?")
    if (choice == 1) {
        //background image for the library setting.
        let image = document.getElementById("bg")
        image.style.backgroundImage = "url('./image/library.jpg')"
        image.style.backgroundRepeat = "no-repeat"
        image.style.backgroundPosition = "center"
        setTimeout(() => library(), 100);
    }

    if (choice == 2) {
        //background image for the basement setting.
        let image = document.getElementById("bg")
        image.style.backgroundImage = "url('./image/basement.jpg')"
        image.style.backgroundRepeat = "no-repeat"
        image.style.backgroundPosition = "center"
        setTimeout(() => basement(), 100);
    }

    if(choice == 3) {
        //background image for the gymnasium setting.
        let image = document.getElementById("bg")
        image.style.backgroundImage = "url('./image/gym.webp')"
        image.style.backgroundRepeat = "no-repeat"
        image.style.backgroundPosition = "center"
        setTimeout(() => gymnasium(), 100);
    }
}

//function to continue playing the game
function continue_game() {
    //background image for the game.
    let image = document.getElementById("bg")
    image.style.backgroundImage = "url('./image/spooky.jpg')"
    image.style.backgroundRepeat = "no-repeat"
    image.style.backgroundPosition = "center"

    let choice;

    setTimeout(() => {choice = +prompt("Do you want to go into the (1) library, (2) basement, or (3) Gymnasium?")}, 100);
    if (choice == 1) {
        //background image for the library setting.
        let image = document.getElementById("bg")
        image.style.backgroundImage = "url('./image/library.jpg')"
        image.style.backgroundRepeat = "no-repeat"
        image.style.backgroundPosition = "center"
        setTimeout(() => library(), 100);
    }
    if (choice == 2) {
        //background image for the basement setting.
        let image = document.getElementById("bg")
        image.style.backgroundImage = "url('./image/basement.jpg')"
        image.style.backgroundRepeat = "no-repeat"
        image.style.backgroundPosition = "center"
        setTimeout(() => basement(), 100);
    }
    if(choice == 3) {
        //background image for the gymnasium setting.
        let image = document.getElementById("bg")
        image.style.backgroundImage = "url('./image/gym.jpg')"
        image.style.backgroundRepeat = "no-repeat"
        image.style.backgroundPosition = "center"
        setTimeout(() => gymnasium(), 100);
    }
}

function library() {


    alert("Welcome To The Library!")
    alert("A Ghost Haunts This Library, find a way to escape without being killed by the ghost!")
    let option = +prompt("You see a creepy old book on a dusty table. Do you (1) open it or (2) leave it alone?")

    if (option == 1){
        alert("You open the book and find a key inside.")
        let option2 = +prompt("You walk around and find a exit, but you see a ghost nearby. Do you (1) run to the exit or (2) hide till the ghost leaves?")
        if (option2 == 1) {
            alert("You run for the exit but the ghost spots you and you DIE.")
            alert("You Failed To Escape!")
            let cont = +prompt("Would you like to (1) continue the game or (2) leave?")
            if (cont == 1) {
                continue_game()
            }
            if (cont == 2) {
                alert("Thanks for playing!")
            }
        }

        if (option2 == 2) {
            alert("The ghost leaves, you find your way to the exit and escape.")
            alert("You Survived The Library!")
            let cont = +prompt("Would you like to (1) continue the game or (2) leave?")
            if (cont == 1) {
                continue_game()
            }
            if (cont == 2) {
                alert("Thanks for playing!")
            }
        }

    }

    if (option == 2) {
        alert("You ignore the book and walk around the library.")
        alert("You find the exit but it's locked. You search for the key and see a ghost near the creepy book you saw before.")
        let option3 = +prompt("You realize the key is in the book. Do you (1) wait for the ghost to leave and snatch the book, (2) sneak behind the ghost and snatch the book, or (3) ignore the ghost and look for another exit.")

        if (option3 == 1) {
            alert("The ghost leaves. You grab the book and find the key inside.")
            alert("You search for the exit, but you see a shiny mysterious bottle on the ground.")
            let option4 = +prompt("Do you (1) ignore it or (2) pick it up?")
            if (option4 == 1) {
                alert("you find your way to the exit and you're able to escape.")
                alert("You Survived The Library!")
                let cont = +prompt("Would you like to (1) continue the game or (2) leave?")
                if (cont == 1) {
                    continue_game()
                }
                if (cont == 2) {
                    alert("Thanks for playing!")
                }
            }
            if (option4 == 2) {
                alert("You pick the bottle and accidentally dropped it, alerting the ghost.")
                alert("You run for the exit but the ghost spots you and you DIE.")
                alert("You Failed To Escape!")
                let cont = +prompt("Would you like to (1) continue the game or (2) leave?")
                if (cont == 1) {
                    continue_game()
                }
                if (cont == 2) {
                    alert("Thanks for playing!")
                }

            }

        }

        if (option3 == 2) {
            alert("The ghost sees you and rushes towards you and you DIE.")
            alert("You Failed To Escape!")
            let cont = +prompt("Would you like to (1) continue the game or (2) leave?")
            if (cont == 1) {
                continue_game()
            }
            if (cont == 2) {
                alert("Thanks for playing!")
            }
        }

        if (option3 == 3) {
            alert("You walk to the opposite end of library and find another exit.")
            alert("In order to open it you must solve a riddle to unlock the door without alerting the ghost.")
            alert("The riddle is: 'I don’t have eyes, but once I did see. Once I had thoughts, but now I’m white and empty. What am I?'")
            let answer = +prompt("Is it (1) a skull or (2) a candle?")
            if (answer == 1) {
                alert("You solve the riddle and the door unlocks. You escape without alerting the ghost and survive.")
                let cont = +prompt("Would you like to (1) continue the game or (2) leave?")
                if (cont == 1) {
                    continue_game()
                }
                if (cont == 2) {
                    alert("Thanks for playing!")
                }

            }
            if (answer == 2) {
                alert("You picked the wrong answer.")
                alert("The ghost spots you and you DIE.")
                alert("You Failed To Escape!")
                let cont = +prompt("Would you like to (1) continue the game  or (2) leave?")
                if (cont == 1) {
                    continue_game()
                }
                if (cont == 2) {
                    alert("Thanks for playing!")
                }

            }

        }
    }

}

function basement() {
    alert("Welcome To The Basement!")
    alert("A Monster Roams The Basement, Try To Escape Without Getting Killed By The Monster.")
    let option = +prompt("You hear strange noises. Do you (1) investigate or (2) run away?")

    if (option == 1){
        alert("You find the exit, but see the monster roaming around.")
        let option2 = +prompt("Do you (1) wait for the monster to leave or (2) sneak behind the monster to get to the exit?")

        if (option2 == 1) {
           alert("The monster leaves. You reach the exit but in order to leave you need to find a key to unlock it.")
           let option3 = +prompt("Do you (1) search the basement or (2) find another exit?")
           if (option3 == 1) {
            alert("You spot a shiny object on the floor which turns out to be the key for the exit.")
            alert("You rush to the exit and escape the basement.")
            alert("You Survived The Basement!")
            let cont = +prompt("Would you like to (1) continue the game or (2) leave?")
            if (cont == 1) {
                continue_game()
            }
            if (cont == 2) {
                alert("Thanks for playing!")
            }
           }

           if (option3 == 2) {
            alert("You walk to the opposing side of the basement and see another exit, but the monster is blocking it.")
            let option4 = +prompt("You find a bottle on the ground, do you (1) use it to lure away the monster by throwing it to the other side or (2) sneak behind the monster?")
            if (option4 == 1) {
                alert("You successfully distract the monster and escape the basement.")
                alert("You Survived The Basement?")
                let cont = +prompt("Would you like to (1) continue the game or (2) leave?")
                if (cont == 1) {
                    continue_game()
                }
                if (cont == 2) {
                    alert("Thanks for playing!")
                }
            }

            if (option4 == 2) {
                alert("The monster sees you and attacks you. You DIE!")
                alert("You Failed To Escape!")
                let cont = +prompt("Would you like to (1) continue the game or (2) leave?")
                if (cont == 1) {
                    continue_game()
                }
                if (cont == 2) {
                    alert("Thanks for playing!")
                }

            }

           }
        }

        if (option2 == 2) {
            alert("The monster sees you and attacks you. You DIE!")
            alert("You Failed To Escape!")
            let cont = +prompt("Would you like to (1) continue the game or (2) leave?")
            if (cont == 1) {
                continue_game()
            }
            if (cont == 2) {
                alert("Thanks for playing!")
            }

        }

    }


    if (option == 2) {
        alert("The monster sees you and attacks you. You DIE!")
        alert("You Failed To Escape!")
        let cont = +prompt("Would you like to (1) continue the game or (2) leave?")
        if (cont == 1) {
            continue_game()
        }
        if (cont == 2) {
            alert("Thanks for playing!")
        }

    }

}

function gymnasium() {
    alert("Welcome To The Gymnasium!")
    alert("There Is A Serial Killer Around You, Try To Escape Without Getting Killed!")
    alert("You walk around the gymnasium, looking for the exit, but you see the killer coming towards you.")
    let option = +prompt("Do you (1) quietly hide in the closet, (2) run the opposite way, or (3) attack the killer with a nearby tool?")

    if (option == 1) {
        alert("You successfully hide from the killer and look for the exit.")
        alert("You find the exit but you need to solve a riddle in order to unlock it.")
        alert("The riddle is: 'You can't see me. You can't touch me. You can't hear me. You can't taste me. I can be interrupted easily. Some enjoy me and others fear me. What am I?'")
        let answer = +prompt("Is it (1) silence or (2) smoke?")

        if (answer == 1) {
            alert("You solve the riddle and the door unlocks. You escape without alerting the killer.")
            alert("You Survived The Gymnasium!")
            let cont = +prompt("Would you like to (1) continue the game or (2) leave?")
            if (cont == 1) {
                continue_game()
            }
            if (cont == 2) {
                alert("Thanks for playing!")
            }
        }

        if (answer == 2) {
            alert("You picked the wrong answer. The killer spots you and kills you.")
            alert("You Failed To Escape")
            let cont = +prompt("Would you like to (1) continue the game or (2) leave?")
            if (cont == 1) {
                continue_game()
            }
            if (cont == 2) {
                alert("Thanks for playing!")
            }

        }

    }

    if (option == 2) {
        alert("The killer catches up with you and kills you.")
        alert("You Failed To Escape!")
        let cont = +prompt("Would you like to (1) continue the game or (2) leave?")
        if (cont == 1) {
            continue_game()
        }
        if (cont == 2) {
            alert("Thanks for playing!")
        }

    }

    if (option == 3) {
        alert("The killer overpowers you and kills you.")
        alert("You Failed To Escape!")
        let cont = +prompt("Would you like to (1) continue the game or (2) leave?")
        if (cont == 1) {
            continue_game()
        }
        if (cont == 2) {
            alert("Thanks for playing!")
        }

    }
}




