
/*Exercise #1
Write a program that takes in an array of numbers and returns the largest number in the list. Example: The given array is [3, 5, 7, 1, 6] The largest number is 7.*/

const numeros = [3, 5, 7, 1, 6];

function ordenar(valores){
//descendente
    let valor = valores.sort(function(x,y){
    return y-x});
    console.log(valor[0]);
}
ordenar(numeros);
