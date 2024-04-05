"use strict";
//Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns 
//the number rounded to the nearest integer.
// function roundOff(num1:number){
//     return Math.round(num1);
// }
// console.log(roundOff(5.4));//output 5
// console.log(roundOff(8.7));//output 9
// console.log(roundOff(3.0));//output 3
// console.log(roundOff(7.6));//output 8
//Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") 
//and converts it into an actual number type.
//praseFloat():
// function convertString(str:string):number{
//     return parseFloat(str);
// }
// console.log(convertString("233"));//output233
// console.log(convertString("45.55"));//output233
// //parseInt();
// function convertString1(str:string):number{
//     return parseInt(str);
// }
// console.log(convertString("7888"));//output233
// console.log(convertString("98.76"));//output233
//Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) 
//and return a boolean result.
function valueCheck(value) {
    return isNaN(value);
}
console.log(valueCheck("Hello World!!"));
console.log(valueCheck(112233));
console.log(valueCheck("TRUE"));
