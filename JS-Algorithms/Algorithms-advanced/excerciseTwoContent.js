/*Exercise #2
Write a program to sort a list of numbers in descending order (from highest to lowest)*/

const numeros = [3, 5, 7, 1, 6];

function ordenar(valores){
//descendente
    let valor = valores.sort(function(x,y){
    return y-x});
    console.log(valor);
}
ordenar(numeros);
