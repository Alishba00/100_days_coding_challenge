//Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method 
//describe() that logs a sentence about the laptop.
// let laptop = {
//     model : "Spectre x360",
//     year : 2024 ,
//     make: "HP",
//     describe: function(){
//         console.log(`This is a ${this.year} ${this.make} ${this.model} laptop.`);
//     }
// };
// laptop.describe();

// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, 
// use array destructuring to assign the first and second laptops to variables. Then, log these variables.

// let laptops = [
//     {make:"HP" , model: "Spectre x360", year:2024},
//     {make:"Dell" , model: "XPS 13", year:2023},
//     {make:"Apple" , model: "MacBook Pro", year:2022}
// ];
// let [laptop1 , laptop2, laptop3] = laptops;
// console.log(laptop1);
// console.log(laptop2);
// console.log(laptop3);

//Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
// Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

// let priceSet1:number[] =[1200,1500,4000];
// let priceSet2:number[] =[1500,1900,8000];
// let combinedArray = [ ...priceSet1,...priceSet2].sort((a, b) => a - b);
// console.log("Combined and sorted array",combinedArray);