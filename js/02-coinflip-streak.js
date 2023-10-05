/*
    Project: Assignment 03: The “Coin Flip Streak” Game (do while loop)
    Date: 10/04/23
    Author: Van Do
    Type: do/ while loop
*/

/*  The “Coin Flip Streak” Game
    In this part of the assignment you will explore what you’ve learned so far about variables, do while loops, conditionals, operators, math, and more to create a “coin flip streak game”. The point of this simple game is to see what kind of streak you can get to (how many times “Heads” comes up in a row before “Tails” does to end the game). To complete the game follow the steps outlined below:     

*/

/* 
    STEP 1 : 
        Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
    STEP 2 : 
        Create a do while loop.
    STEP 3 : 
        Within the do while loop assign a randomly generated number to You will have to use the same Math formula that you used in the previous assignment to get this number.
    STEP 4 : 
        Use a conditional statement to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.
    STEP 5 :
        Set the condition of the do while loop to end once the coinFlip becomes “Tails”.

*/



// STEP 1 - DECLARE VARIABLES
let coinFlip;
let flip;
let num = 1; 

// STEP 2 - CREATE DO WHILE LOOP
do { 
    num++;
    // STEP 3 - WITHIN LOOP RANDOMLY GENERATE NUMBER
	coinFlip = Math.round(Math.random());
    // console.log(coinFlip);
    // STEP 4 - CONDITIONAL STATEMENT TO CHECK RESULT OF COIN FLIP
    flip = coinFlip < 1 ? 'Heads' : 'Tails';
    console.log(flip);
// STEP 5 - SET CONDITION TO END ONCE COIN FLIP BECOMES TAILS
} while (coinFlip == 0);


