/*
    Project: Assignment 03: Marco! Polo!
    Date: 10/04/23
    Author: Van Do
    Type: for loop 
*/

/*  Marco! Polo!
    Create an application which iterates numbers from 1 to 100. 
    For multiples of 3, print "Marco!" instead of the number and for multiples of 5, print "Polo!" instead of the number. For numbers which are multiples of both 3 and 5 print "Marco! Polo!". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.
*/


// DECLARE VARIABLES
let i;

// FOR LOOP ITERATES FROM 1 TO 100
for (i = 1; i<=100; i++) {
    // DISPLAY "Marco! Polo!" IF NUMBER IS MULTIPLE OF 3 AND 5
    if (i % 3 == 0 && i % 5 == 0){
        console.log('Marco! Polo!');
    // DISPLAY "Marco!" IF NUMBER IS MULTIPLE OF 3 ONLY  
    } else if (i % 3 == 0){
        console.log('Marco!');
    // DISPLAY "Polo!" IF NUMBER IS MULTIPLE OF 5 ONLY
    } else if (i % 5 == 0){
        console.log('Polo!');
    // OTHERWISE DISPLAY NUMBER
    } else {
        console.log(`${i}`);
    }
}