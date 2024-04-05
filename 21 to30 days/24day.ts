//Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. 
//Explain how the let keyword affects the visibility of the loop variable.
// function printNumber(){
//  for(let i = 1; i <= 5; i++)
//   console.log(i);
// }

// printNumber();


//Question 71: Compare let and const: Create two examples where let allows reassignment but const does not.
// Try to reassign a const-declared variable and catch the error.

//using let that can be reassign
// let color:String = "Blue";
// console.log(color);//output blue.
// //reassign let
// color = "RED";
// console.log(color);//output RED.

// //using const and try to reassign 
// const friendName:string = "Female";
// console.log(friendName);//output female
// //try to reassign const 
// try {
//     friendName = "GIRL";//this line cause an error.
// } catch (error){
//     console.log(`Error: can't reassign a const_declared variable.`);
// }


//Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both
// let and const. Show how variables declared inside the block are not accessible outside of it.
//block scope.
// {
//     let myName = "Alishba";
//     const age = 18;
//     console.log(myName);
//     console.log(age);
// }
//  console.log(myName);//error occured
//  console.log(age);//error occured
// //global scope
// let num1 = 10;
// const num2 = 20;
// {
//     console.log(num1);
//     console.log(num2);
// }
//  console.log(num1);
//  console.log(num2);