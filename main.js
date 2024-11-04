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

        //   document.getElementById("bg").src="./image/library.jpg"
        // document.body.style.background = "url('./image/library.jpg')"
        library()
    }

    if (choice == 2) {
        //background image for the basement setting.
        let image = document.getElementById("bg")
        image.style.backgroundImage = "url('./image/basement.jpg')"
        image.style.backgroundRepeat = "no-repeat"
        image.style.backgroundPosition = "center"
        basement()
    }

    if(choice == 3) {
        //background image for the gymnasium setting.
        let image = document.getElementById("bg")
        image.style.backgroundImage = "url('./image/gym.webp')"
        image.style.backgroundRepeat = "no-repeat"
        image.style.backgroundPosition = "center"
        gymnasium()
    }
}

//function to continue playing the game
function continue_game() {
    //background image for the game.
    let image = document.getElementById("bg")
    image.style.backgroundImage = "url('./image/spooky.jpg')"
    image.style.backgroundRepeat = "no-repeat"
    image.style.backgroundPosition = "center"

    let choice = +prompt("Do you want to go into the (1) library, (2) basement, or (3) Gymnasium?")
    if (choice == 1) {
        //background image for the library setting.
        let image = document.getElementById("bg")
        image.style.backgroundImage = "url('./image/library.jpg')"
        image.style.backgroundRepeat = "no-repeat"
        image.style.backgroundPosition = "center"
        library()
    }
    if (choice == 2) {
        //background image for the basement setting.
        let image = document.getElementById("bg")
        image.style.backgroundImage = "url('./image/basement.jpg')"
        image.style.backgroundRepeat = "no-repeat"
        image.style.backgroundPosition = "center"
        basement()
    }
    if(choice == 3) {
        //background image for the gymnasium setting.
        let image = document.getElementById("bg")
        image.style.backgroundImage = "url('./image/gym.jpg')"
        image.style.backgroundRepeat = "no-repeat"
        image.style.backgroundPosition = "center"
        gymnasium()
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