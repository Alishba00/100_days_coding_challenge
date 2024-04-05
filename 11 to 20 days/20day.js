"use strict";
//Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
// function averageScore(...scores:number[]): number {
//     let total = scores.reduce((sum,scores) => sum + scores ,0);
//     return total / averageScore.length
// }
// console.log(averageScore(80,90,100));
//Question 59: Add a Special Number: Make a program that creates custom adders. These adders 
//can add a specific number to any other number you give them later.
// function addNumber(numToAdd:number) {
//     return function(number:number) {
//         return number + numToAdd
//     };
// }
// let add5 =addNumber(5);
// console.log(add5(10));//output 15(5+10)
// console.log(add5(20));//output 25(5+20)
// let add10 = addNumber(10);
// console.log(add10(20));//output 30(10+20)
// console.log(add10(40));//output  50(10+40)
//Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
let userProfile = (function () {
    let name = "Aiman";
    let age = 20;
    return {
        displayinfo: function () {
            console.log(`Name: ${name} , Age:${age}`);
        }
    };
})();
userProfile.displayinfo();
