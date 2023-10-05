/*
    Project: Assignment 03: Odd or Even?
    Date: 10/04/23
    Author: Van Do
    Type: for loop nested if/else statement
*/

/* Odd or Even?

    Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window.

    Sample Output:
    "0 is even"
    "1 is odd"
    "2 is even"
*/


// DECLARE VARIABLES
let i;

// FOR LOOP THAT ITERATES FROM 0 TO 15
for (i = 0; i <= 15; i++) {
    if (i % 2 == 0) {    // CHECK IF NUMBER IS EVEN DISPLAY MESSAGE
        console.log(`${i} is even`);
    } else {     // IF THE NUMBER IS ODD DISPLAY MESSAGE
        console.log(`${i} is odd`);
    }
};

