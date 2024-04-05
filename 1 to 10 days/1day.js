"use strict";
//Question no:2 ; Personal Message:
// Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
let firstName = "Alishba";
console.log("Hello " + (firstName) + " Would you like to learn some typescript today?");
//Question 3: Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.
let userName = "Alishba";
console.log(userName.toLowerCase()); //This display the name is uppercase.
console.log(userName.toUpperCase()); // This display the name is lowercase.
console.log(userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase());
// This display the first letter is uppercase and the remaining is lowercase.
