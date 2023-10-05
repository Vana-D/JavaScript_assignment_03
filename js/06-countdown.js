/*
    Project: Assignment 03: Countdown
    Date: 10/04/23
    Author: Van Do
    Type: do/ while loop
*/

/*  Countdown
    Write an application that counts down to 0 based on the number that a user passes into a prompt. If the number is 10, it should count down from 10 to 0. If the number is 100, it should count down from 100 to 0 and so on. 
*/


// DECLARE VARIABLE AND PROMPT USER FOR NUMBER
num = parseInt(prompt(`Select a number.`));


// DISPLAY USER ENTERED NUMBER
if (num > 0) {
    console.log(`${num}`);
    // DO WHILE LOOP TO COUNTDOWN FROM USER ENTERED NUMBER TO DISPLAY IN CONSOLE
    do {
        num--
        console.log(`${num}`);
    } while (num > 0);
} else {
    console.log('Please enter a positive integer.');
}

