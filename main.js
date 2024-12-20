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

// if statements practice

// Part one
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

    if (age % 2 == 0) {
        console.log("Your age is an even number.")
    }

    if (age % 2 != 0) {
        console.log("Your age is an odd number.")
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

// Part Three
function longer_string(str1, str2) {
    if (str1.length > str2.length) {
        return(`${str1}`)
    }

    if (str2.length > str1.length) {
        return(`${str2}`)
    }

    if (str1.length == str2.length) {
        return(`They are the same length.`)
    }
}

// Part Four 

function discriminant(a,b,c) {
    let zero = (b**2) - (4*a*c)
    if (zero == 0) {
        return("It has one zero")
    }

    if (zero > 0 ) { 
        return("It has two zeros")
    }

    if (zero < 0 ) { 
        return("It has no real zeros")
    }

}


// else if statement practice

// Part one
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

// Part Two
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

// Part Three
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

// Part One
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
    
    if (is_number(n)) {
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


// While loop practices

// Part one
function countdown(start, stop) {
    if ( start <= stop) {
        return(-1)
    }
    let count = 0
    while (start > stop) {
        console.log(start)
        start -= 1
        count += 1
    }
    return(count)
}

// Part two
function random_until(min, max, stop) {
    // Error checking
    if ( stop < min || stop > max || max <= min) {
        return(-1)
    }

    let rnd = randInt(min, max)
    while ( rnd != stop) {
        console.log(rnd)
        rnd = randInt(min, max)
    }
    return(stop)
}

// Part three
function average(n) {
    let avg = 0
    let count = 1
    avg = +prompt("Please enter value:")
    while (count <= n) {
        avg += +prompt("Please enter value:")
        count += 1
    }
    avg = round(avg/n, 1)
    console.log(`The average is ${avg}`)
}


// Interlude_Strings practice

// Part one 
function print_reverse(str) {
    let current_letter = str.length - 1
    let output =  ""
    while (current_letter >= 0) {
        output += str[current_letter]
        current_letter -= 1
    }
    console.log(output)
}
  
// Part two
function dragons_and_goblins(str) {
    let i = 0
    let d = 0
    let g = 0
    while (i < str.length) {
        if (str[i] == "d") {
            d += 1
        }
        else if ( str[i] == "g") {
            g += 1
        }
        i += 1
    }
    console.log(`Dragons: ${d} Goblins: ${g}`)

}

// Part three
function add(str) {
    let i = 0
    let add = 0
    while (i < str.length){
        add = add + Number(str[i])
        i += 1
    }
    console.log(add)

}

// Part four
function add_subtract(str) {
    let i = 0
    let add = 0 
    while (i < str.length) {
        if (str[i] == "-") {
            i += 1
            add = add - Number(str[i])
        }
        else 
        add = add + Number(str[i])
        i += 1
    }
    console.log(add)
}

// Part five

function substring1(mainstring, start, stop) {
    let output = ""
    if (start > stop) {
        let i = start
        let k = stop
        start = k 
        stop = i
    }
    else if ( start < 0) {
        start = 0
    }
    else if ( stop < 0) {
        stop = 0
    }
    while (start <= stop) {
        output = output + mainstring[start]
        start += 1
    }
    return(output)
}

function fix_pronoun(str) {
    let n = str[0].toUpperCase()
    let output = ""
    if (str[0] != str[0].toUpperCase() || str != str.toLowerCase()) {
        output = output + n + substring(str.toLowerCase(), 1, str.length - 1)
        console.log(output)
    }
}

// Do while loop practices 
// Part one
// Build a string from user input
function build_string() {
    let output = "";
    let looping = true;
    let input;
    do {
      input = prompt("Enter a string of text or a single 'q' to quit: ");
      if (input.toLowerCase() != "q") {
        output += input;
      } else {
        looping = false;
      }
    } while (looping);
  
    return output;
}


function printOdd(n) {
  if ( n % 1 != 0 || n < 1 || isNaN(n)) {
    return
  }
  let c = 1
  do {
    console.log(c)
    c += 2
    } while (c <= n && c % 2 != 0)
}

function negative_only() {
    let input;
    do {
        input = +prompt(" Give a negative number.")
    } while (input >= 0 || isNaN(input))
    return (input)
}

function parrot() {
    let input 
    do {
        input = prompt("Enter some text or the word 'quit'")
        if (input.toLowerCase() != "quit") {
            console.log(input.toUpperCase())
        }
    } while ( input.toLowerCase() != "quit")

    console.log("GOODBYE 🦜")
}

function factorial(n) {
    if ( n < 0 || isNaN(n)) {
        return
    }
    else if (n == 0) {
        return(1)
    }
    let i = 1
    let add = 1
    do {
        add = i*add 
        i += 1
    } while (i < n) 
    return(n*add)
}


// For loop pracices
// Part one
function count_up(start, stop) {
    for ( start; start <= stop; start += 1) {
        console.log(start)
    }
}

function count_down(start, stop) {
    for ( start; start >= stop; start -= 1) {
        console.log(start)
    }
}

function print_chars(str, step) {
    for( let i = 0; i < str.length; i += step) {
        console.log(str[i])
    }
}


// Part two
function sum(n) {
    let add = 0
    for(let i = 1; i <= n; i += 1) {
        add += i
    }
    return(add)
}

function count4(begin, end) {
    let i = 0
    for (begin; begin <= end; begin += 1) {
        if (begin % 4 == 0) {
            i += 1
        }
    }
    return (i)
}

function sum_divisible(n, x) {
    let sum = 0 
    for( let i = x; i <= n; i += 1){
        if ( i % x == 0) {
            sum = sum + i
        }
    }
    return(sum)
}

function sum_divisible2(n, x) {
    let sum = 0 
    for( let i = x; i <= n; i += x){
        sum = sum + i
    }
    return(sum)
}

function count_char(str, char) {
    let add = 0
    for (let i = 0; i <= str.length - 1; i += 1){
        if (str[i] == char){
            add += 1
        } 
    }
    if ( add == 0) {
        return(-1)
    }
    return(add)
}

function print_codes(str) {
    for( let i = 0; i <= str.length - 1; i += 1){
        console.log(str.charCodeAt(i))
    }
}

function determine_case(c) {
    if (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) {
        return("U")
    }

    else if (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) {
        return("L")
    }

    else if ( c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57) {
        return("N")
    }

    else {
        return("S")
    }
}

function print_case(str) {
    let output = " "
    for(let i = 0; i < str.length; i++){
        output = output + determine_case(str[i])
    }
    return (output)
}

function tail(str, n) {
    if ( n < 0 || isNaN(n) || n > str.length) {
        return(-1)
    }
    let output = ""
    let i = str.length - n
    for( let a = n;  a != 0; a--){
        output = output + str[i]
        i = i + 1
    }
    return(output)
}

function print_line(char, width){
    let output = ""
    for( let i = 1; i <= width; i++) {
        output = output + char
    }
    return(output)
}

function print_rectangle(char, height, width){
    let output = ""
    for (let i = 1; i <= height; i++){
        output = print_line(char, width) 
        console.log(output)
    }
}

function fib_sequence(n){
    let output = " "
    let x = 0
    let g = 1
    let c = x 
    let d = 0
    let e = 1
    for (let i = 1; i <= n; i++ ) {
        output += `${x},`
        if (x < 1) {
        x++
        }

        else if (x == 1) {
            x  = g + d
            d += 1

        }
        else if (x < 2){
            g += 1
            c += 1
            x = g + c
        }   
        else  {
         e = x
         x += x 
         x = x - e
         /*g += x
          x = (x - g) + c */
        }
        
    }
    return(output)
}

function fib_(n) {
    let output = ""
    let x = 0 
    
    for ( let i = 0; i < n; i++) {
       output += `${x}`
       x += 1
        x += x
    }
    
    return (output)
}


function squirrel_crypt(str){

}


function hero3(arrows, enemies){
    for (let  i = 0; i < enemies.length; i++){
        if (live_or_die(arrows, enemies[i])){
            arrows -= enemies
        }
        else {
            return false
        }
    }
    return true
}

function live_or_die(arrows, hp){
    return(arrows >= hp)
}