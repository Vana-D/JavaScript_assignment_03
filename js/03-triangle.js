/*
    Project: Assignment 03: Looping a Triangle
    Date: 10/04/23
    Author: Van Do
    Type: for loop
*/


/*  Looping a Triangle

    Write a loop that displays the following triangle within a console window:
        #
        ##
        ###
        ####
        #####
        ######
        #######
*/


// DECLARE VARIABLE AND ASSIGN
let numSign = "#";
let i = 0;

// FOR LOOP TO ADD NUMBER SIGN FOR SEVEN ITERATIONS
for ( i; i < 7; i++) {
    console.log(numSign);
    numSign+="#";
};




