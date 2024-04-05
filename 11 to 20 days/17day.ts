//Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies.
// It should log each hobby with a statement saying you enjoy that hobby.
//  // Function with rest parameter to log hobbies

// // function logHobbies(...hobbies:string []) {
//     hobbies.forEach(hobby => {
//       console.log(`I enjoy ${hobby}.`);
//     });
//   }
  
//   // Example usage
//   logHobbies("Learning", "Coding", "Eating");



//Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. 
//Include at least three different activities.

let myIdolDay:string = `My Idol day would involve:
1:Waking up early in the morning.
2:Spending some hours in coding.
3:The end of the day reading something new about coding. `;

console.log(myIdolDay);


//Question 51: Refactoring to Arrow Functions: Take a simple function that
// calculates the area of a rectangle and refactor it into an arrow function.


// function calculateArea(width: number , height: number): number{
//     return width * height;
// }
// let calculateAreaArrow = (width: number , height: number) : number => width * height;

// console.log(calculateAreaArrow(8,6));