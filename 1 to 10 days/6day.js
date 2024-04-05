"use strict";
// // //Question No:16  More guest:You've found a bigger dinner table, so there's room for more guests.
let guest1 = ["Faiz Ahmed Faiz", "Allama Muhammad Iqbal ", "Habib Jalib", "Jaun Elia"];
console.log("Great News! I have found a big dinner table.");
//Adding more guest.
guest1.splice(0, 0, "Mirza Ghalib");
//console.log(guest);
guest1.unshift("Ahmad Faraz");
//console.log(guest);
guest1.push("Jaun Elia");
guest1.forEach(guest1 => {
    console.log(`Hello,${guest1} would you like to join us on dinner?`);
});
//Question No:17 Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, 
//and you can only invite two guests.
console.log("Unfortunately, I can invite only two person");
while (guest1.length > 2) {
    let removedGuest = guest1.pop();
    console.log(` Sorry ${removedGuest} , i can't invite you to dinner.`);
}
;
guest1.forEach(guest1 => {
    console.log(`Hello ${guest1}, you're still invited`);
});
guest1.splice(0);
console.log(guest1);
//Question 18:Seeing the World: Think of at least five places you’d like to visit.
let places = ["Islamabad", "Lahore", "Karachi", "Rawalpindi"];
console.log("Orginal order", places);
console.log("Alphabetical order", [...places].sort());
console.log("Orginal order", places.sort());
console.log("Reverse  alphabetical order", places, [...places].sort().reverse());
places.reverse();
console.log("Orginal order", places);
places.reverse();
console.log("Reversed order", places);
places.sort();
console.log("Alphabetical order", places);
places.reverse();
console.log("Reversed  alphabetical order", places);
