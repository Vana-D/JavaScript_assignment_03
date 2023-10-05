/*
    Project: Assignment 03: The “Coin Flip” Game Redux
    Date: 10/04/23
    Author: Van Do
    Type: for loop
*/


/*  The “Coin Flip” Game Redux
    In this part of the assignment you will explore what you’ve learned so far about variables, for loops, conditionals, operators, math, and more to create a different version of the “coin flip game”. To complete the game follow the steps outlined below:  
*/

/*
    STEP 1 : 
        Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
    STEP 2 : 
        Create a for loop that loops a certain amount of times. The amount of times that the for loop executes will be collected from the user via a prompt.
    STEP 3 : 
        Within the for loop assign a randomly generated number to You will have to use the same Math formula that you used in the previous assignment to get this number. 
    STEP 4 :
        Use a conditional statement to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 

    Note: Unlike the previous assignment, you’re not prompting the user for their choice. You’re simply displaying the coin flip results in the console. 
*/


// STEP 1 - DECLARE VARIABLES
let coinFlip;
let flip; 

// STEP 2 - COLLECT USER INPUT
let loop = parseInt(prompt('How many times would you like the coin to flip?'));

for (let i = 1; i <= loop; i++){
    // STEP 3 - WITHIN LOOP RANDOMLY GENERATE NUMBER
    coinFlip = Math.round(Math.random());
    // console.log(coinFlip);
    // STEP 4 - CONDITIONAL STATEMENT TO CHECK RESULT OF COIN FLIP
    flip = coinFlip < 1 ? 'Heads' : 'Tails';
    console.log(flip);
};




