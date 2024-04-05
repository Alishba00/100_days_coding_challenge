//Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
// let magician:string[] = ["Harry Houdini", "David Copperfield", "Penn & Teller",];
// function make_great(magician : string[]) : string[] {
//     let great_magicians = ["Dynamo"];
//     magician.forEach(magician=>{
//         great_magicians.push(`${magician} The Great`);
//     });
//     return great_magicians; 
// }

// let great_magicians = make_great(magician.slice());
// console.log("Original Magicians.");
// console.log(magician);
// console.log("Great Magicians.");
// console.log(great_magicians);

//Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

// function make_sandwich(...items :string[]){
//     console.log(`Making a sandwich with ${items.join(',')}.`)
// }
// make_sandwich("Roast beef", "Chicken");
// make_sandwich("cheese", "lettuce");
// make_sandwich("Onion", "Bell peppers");
// make_sandwich("Egg", "mayo",);



//Question 45: Cars: Create detailed car objects with flexible properties.

// function createCar(manufacturer: string, model:string, ...optons:[string,any][]): any{
//     let car:any ={
//         manufacturer,
//         model,
//     };
//     for (let[key,value] of optons){
//         car[key] = value;
//     }
//     return car;
// }
// console.log(createCar("Toyoto","corollla",["color","red"]));
// console.log(createCar("Audi"," e-tron",["color","black"], ["year" , 2022]));
