//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, 
//and motorcycles using enums, and show one example.

// enum vehiclesType {
//     cars,
//     type,
//     motorcycles,
//     bus,
// }

// console.log("VEHICLES CATEGORIES");
// console.log("Type", vehiclesType.bus);
// console.log("Type", vehiclesType.cars);
// console.log("Type", vehiclesType.motorcycles);
// console.log("Type", vehiclesType.type);

//Question 62: Making a Student Template: Create a blueprint for student information, including their name,
// age, and the classes they're taking, and then fill in this blueprint with an example student.

// interface  student{
//     name:string,
//     age :number,
//     coures:string[],
// }
// let student: student = {
//     name: "Alishba",
//     age: 18,
//     coures:["Math","Accounting","Urdu","English"],
// }
// console.log(student);

//Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, 
//including properties unique to each shape.

// type shape = {
//     kind:"triangle"| "square"|"circle"
//     radius?:number;//for only circle
//     height?:number;//for square and triangle
//     width?:number;//for square and triangle
// }
// let circle: shape ={
//     kind:"circle",
//     radius:5,
// }
// let square:shape={
//     kind:"square",
//     height:40,
//     width:30,
// }
// let triangle:shape={
//     kind:"triangle",
//     height:10,
//     width:20,
// };
// console.log(circle);
// console.log(square);
// console.log(triangle);


