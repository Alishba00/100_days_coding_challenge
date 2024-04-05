// //Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. 
// //Include its brand, model, and other key features like how much storage it has, the size of its screen, and
// // how long its battery lasts.

// let smartPhone = {
//     brand : "Apple",
//     model: "iPhone 15 Pro Max",
//     specs: {
//         storage:" 256GB",
//         screenSize : "6.1 inches",
//         batteryLife : "Up to 75 hours",
//     }
// }
//     console.log(smartPhone);


 //Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer
 // knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
   
//  let developerSkill = {
//     languages : ["Javascript","Java","Python"],
//     tools:["React","Node.js","Spring boots"],
//     frameWorks:["VS code","Git","Docker"],
//  }
//  let {languages,tools,frameWorks }= developerSkill;
//  console.log(`Languages: ${languages[1]} Tools: ${tools[1]} Frameworks: ${frameWorks[1]}`);


 //Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each 
 //section based on what you need at that moment, like adjusting labels based on user choices.

//  let object = (key:any, value:any)=> {
//     let deblicateobject = [];
//     deblicateobject [key]= value
//     return deblicateobject
//  }
//  let userPrefrence = object('favourite color' , 'Blue')
//  console.log(userPrefrence);
//  let userPrefrence1 = object('favourite Subject' , 'Math')
//  console.log(userPrefrence1);
//  let userPrefrence2 = object('friend name' , 'Aiman')
//  console.log(userPrefrence2);
