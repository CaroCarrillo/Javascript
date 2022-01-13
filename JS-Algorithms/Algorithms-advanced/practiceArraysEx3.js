/*Exercise #3
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.

Example: Given an array The sum is 10. The product is 24.*/

const numbers = [1, 2, 3, 4];

function sum(total, num) {
    return total + num;
}

function product(total, num) {
    return total * num;
}
result1 = numbers.reduce(sum);
result2 = numbers.reduce(product);
console.log (result1);
console.log (result2);
