/* JS-04 Arrays and Loops

Exercise #3
Write while loops to do the following:
– Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive.*/

let xValue = 100
while(xValue > 0){
    xValue = xValue - 0.5;
    console.log(xValue);
}

/*
- Print all the odd numbers between 1 - 100.*/
let oddNumbers = 1
while(oddNumbers <= 100){
    if (oddNumbers % 2 == 0){
        console.log(oddNumbers);
    } 
    oddNumbers++;
}

/*
- Write a method with a while loop to print 1 through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6]*/
function squareBrackets(number) {
    let i = 1
    while (i <= number) {
        console.log([i]);
        i++;
    }
}
let number = Number(prompt("Cuál número escoges?"))
squareBrackets(number);

/*
- Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n

Examples:
n = 5 sum = 15
n = 19 sum = 190*/

function sumNumbers(number) {
    let i = 1
    let sum = 0
while(i <= number){
    sum = sum + i
    i++
}
console.log("The sum of all the numbers is " + sum);
}
let number = Number(prompt("Write a number"));
sumNumbers(number);