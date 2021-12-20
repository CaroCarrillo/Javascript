/*Exercise #5
For each of the exercises below, assume you are starting with the following people array.

Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to add "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log-ing "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.*/

var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log("First array : " + people);
console.log("Remove Dani: " + people.splice(1,1));
console.log("Remove Juan: " + people.splice(2,1));
console.log("Remove Luis:" + people.splice(1,1));
console.log("Add Luis: " + people.unshift("Luis"));
console.log("Add my name: " + people.push("Carolina"));

for (let i=0; i<people.length; i++){
    console.log(people[i])
    if (people[i] === "Maria"){
        break;
    } 
}
console.log("Maria is located in: " + people.indexOf("Maria") );
console.log(people);
