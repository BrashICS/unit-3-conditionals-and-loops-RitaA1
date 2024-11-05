# Unit 3 - Conditionals and Loops

## 3.4 - While

##### ICS3 - Mr. Brash 🐿️

<table>
<tr>
<th>3.4 - In this Lesson:</th>
<th>Unit 3 - Conditionals & Loops</th>
</tr>
<tr>
<td td valign="top" style="height: 100px;padding-right:50px">

- [Preamble: `isNaN()`](#preamble-isnan)
- [The `While` Loop](#lesson)
- [Examples](#examples)
- [Practice Time!](#practice-time)
    - [Part 1 - is_number](#part-1---is_number)
    - [Part 2 - Validate](#part-2---validate)
    - [Part 3 - Guess](#part-3---guess)
    
</td>
<td td valign="top" style="height: 100px;padding-right:50px">

- [README](../../README.md)
- [3.1 - If](../1%20-%20Conditionals/1%20-%20IF.md)
- [3.2 - Else-If](../1%20-%20Conditionals/2%20-%20Else-If.md)
- [3.3 - Else](../1%20-%20Conditionals/3%20-%20Else.md)
- [3.4 - While](./4%20-%20While.md)
- [3.5 - Interlude: `Strings`](./5%20-%20Interlude_Strings.md)
- [3.5 - Do...While](./6%20-%20Do-While.md)
- [3.6 - For](./7%20-%20For.md)

</td></tr></table>

---

### Preamble: isNaN

There is a function built in to JavaScript called `isNaN()`. It returns _true_ if a value is **_not_** a number.
```JS
if (isNaN(my_value)) {
  console.log("That was not a number.");
} else {
  console.log("It was a number!");
}
```

### Lesson:

Copy/pasting your code is inefficient. You should always avoid having the same code multiple times.

Also we might not know when a situation will end:
```JS
// Ask the user to enter a number and check for valid input
let input = Number(prompt(“Enter a number.”));

if (isNaN(input))
  input = Number(prompt(`Please enter a number.`));
    if (isNaN(input))
      input = Number(prompt(`Ugh, please enter a number.`));
        if (isNaN(input))
          input = Number(prompt(`Enter a NUMBER.`));
            if (isNaN(input))
              ... 

            // When will the insanity end?
```

For another example - imagine a guessing game from 1 to 1000 with as many guesses as you want. That's a **lot** of if-statements.

Programming languages have the ability to move back up to a specific line in the code. 
<img src="../images/pretend_loop.jpg" alt="Theoretical Loop">

<div style="text-align:center;">
    <p>
        It's not as simple as saying "go back to line 12", but it's still pretty simple:
    </p>
    <img src="../images/while.jpg" width="400px" alt="While loop syntax">
</div>

<span style="color:skyblue;">**Think of the condition _just like an if-statement_!**</span> The code will loop (repeat) and _continue_ to loop _if_ (or _while_) the condition is `true`. Let's look at some examples:

### Examples

##### [Top ⬆](#34---while)

```JS
// Example: A never-ending loop (not good)
while (true) {
  console.log("You can't stop me!");
}

// Example: Counting to 10
let n = 0;
while (n <= 10) {
  console.log("n is", n);
  n++;  // We need to make sure we modify 'n'!
}

// Example: Ask the user for their name
let input = prompt("What is your name?");
while (input.length == 0) {
  input = prompt("Sorry, I didn't catch that. What is your name?");
}

// Example: Annoy the user
let input = prompt("Press cancel to stop the insanity.");
while (input != null) {
  input = prompt("Press cancel to stop the insanity.");
}
```

### Practice Time!

##### [Top ⬆](#34---while)

Note - if you struggle with the functions below, see your teacher for simpler examples / tasks.

### Create the following three functions:
1. `countdown(start, stop)`: this function will count down from the `start` value to the `stop` value.
  - Before you loop, make sure `start > stop`.
    - If not, return -1.
  - When the loop finishes, the function should _return_ **the number of times it looped** (how many numbers it printed).  

    For Example:
    ```txt
    countdown(9, 4)
    9
    8
    7
    6
    5
    4
    6   << That's the return value
    ```
<br>

2. `random_until(min, max, stop)`: this function will...
    - check that `max` is _greater_ than `min`. If not, return -1;
    - check that `stop` is between (or equal to) `min` and `max`. If not, return -1;
    - generate a random number from `min` to `max`. Print it to the console. 
      - _Repeat this process as long as the random number is not equal to_ `stop`;
    - return `stop`.  

    Example:
    ```txt
    random_until(5, 15, 7)
    6
    8
    8
    5
    11
    5
    12
    7   << That's the return value
    ```
<br>

3. `average(n)` - this function asks the user for `n` values and then calculates the average, rounded to 1 decimal. It should behave like this:
   ```txt
   average(5)
   Please enter value 1/5 > 6
   Please enter value 2/5 > 4
   Please enter value 3/5 > 2
   Please enter value 4/5 > 4
   Please enter value 5/5 > 12
   The average is 5.6
   ```
    It is safe to assume proper input - _no need to check that it's a valid number_.

### "Sir, this is too easy for me - I'm kinda bored in your class."

Being bored is healthy - it breed creativity. Get creative. You have the ability to make websites with HTML and CSS. You also know how to make the website interactive with JavaScript. [Learn](https://pll.harvard.edu/course/cs50-introduction-computer-science), [follow a tutorial](https://p5js.org/tutorials/), or maybe even [learn another programming language](https://www.learncpp.com/). [**The world is at your fingertips!**](https://www.google.com/search?q=how+do+I+learn+to+program)

<br>

🐿️