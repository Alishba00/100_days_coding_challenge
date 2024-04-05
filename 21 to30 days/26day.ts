//Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters,
// adds them together, and returns the result. Show how you can call this function and log the result.
// function twoNumber(num1:number ,num2:number):number{
//      return num1 + num2
// }
// console.log(twoNumber(10,5));


//Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter
// and say hello. If no name is given, it should greet an anonymous user.

// function greets (username:string = "anonymous") {
//     console.log(`HELLO ${username}!`);
// }
// greets("Alishba");
// greets();


//Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating 
//one of each that performs the same task, such as squaring a number.
//declaraction function
// function declaraction(number:number):number{
//     return number*number
// }
// //expression function.
// let expressions = function (number:number): number{
//     return number * number
// }
// //console with same number 2
// console.log(declaraction(2));//output 4
// console.log(expressions(2));//output 4