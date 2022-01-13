/*Sorting
Exercise #1
Write a program to sort a list of names alphabetically.*/

let namesArray = []
for (let i=0; i<5; i++){
    let names = prompt("Ingresa nombre: ")
    namesArray.push(names);
}

console.log(namesArray.sort());