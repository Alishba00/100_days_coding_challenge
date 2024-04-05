"use strict";
//Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to 
//print a message indicating the number of people you are inviting to dinner.
let dinnerGuest = ["mano", "muzaammil", "misbah", "aiman"];
console.log(dinnerGuest.length);
//Question 20: Think of something you could store in an array. 
//For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
//Write a program that creates a list containing these items.
let fruits = ['Mango', "Grapes", "Peaches", "Stawberry", "Gauava"];
fruits.forEach(fruits => console.log("I had like to eat fruits", fruits));
console.log("I had like to eat fruits", fruits);
//Question 21: Think of something you could store in a TypeScript
// Object. Write a program that creates Objects containing these items.
let car = {
    model: "e-tron",
    company: "Audi",
    year: 2022,
    color: "Black",
};
console.log(`The ${car.company} ${car.model}, introduced in ${car.year} , manufactured by ${car.company} , and available in ${car.color} color."`);
