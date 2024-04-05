//Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string
// that represents a number (e.g., "5"). Return their sum as a number. 

// function mixedTypes(number1:number, numberString:string):number{
//     return number1 + Number(numberString);
// }
// console.log(mixedTypes(15,"10"));//output 25


//Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. 
//Round the result to two decimal places.

// function multiplyDecimal(num:number,num5:number):number{
//     return ((num * num5 )*100)/100
// }
// console.log(multiplyDecimal(0.06,0.04));//0.0024
// console.log(multiplyDecimal(0.01,0.2));
// console.log(multiplyDecimal(0.5,0.4));


//Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns 
//both the quotient and the remainder. Use an object to return both values.
// function bothDividandRemainder(dividend :number , divisor:number): {quotient: number; remainder: number} {
//     // firslty calculate quotient and remainder
//     let quotient= Math.floor(dividend / divisor);
//     let  remainder = dividend % divisor;
//     //return both 
//     return {quotient , remainder}
// }
// console.log(bothDividandRemainder(10,6));//output 4
// console.log(bothDividandRemainder(3,6));//output 0
// console.log(bothDividandRemainder(7,6));//output 1