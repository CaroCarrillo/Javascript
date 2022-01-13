/**
 * 
 *  Create a function that takes in 2 inputs (using prompt)
 *  and goes through the 5 arithmetic operators (+, -, /, *,
 *  %). The expected output on the console is:
 * `The sum is x` -> x is the calculated sum
 * `The subtraction is y` -> y is the calculated difference
 * `The multiplication is z` -> z is the calculated multiplication
 * `The division is w` -> w is the calculated division
 * `The remainder is q` -> q is the calculated remainder
 */

function mathematicOperations(a,b) {
    let x = a+b;
    let y = a-b;
    let z = a*b;
    let w = a/b;
    let q = a%b;

    alert ("The sum is: " + x + "\n" + "The subtraction is: " + y + "\n" + "The multiplication is: " + z + "\n" + "The division is: " + w + "\n" + "The remainder is: " + q);
}

let number1 = parseInt(prompt("Enter the first number:"));
let number2 = parseInt(prompt("Enter the second number:"));

mathematicOperations(number1, number2);