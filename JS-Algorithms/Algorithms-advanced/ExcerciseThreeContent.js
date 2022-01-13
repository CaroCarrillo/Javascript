/*Exercise #3
Step 1

Write a program that takes in two lists and returns the greatest number out of the two lists. Hint: call the function from Class Exercise #1 (Exercise #1 should return a single number - the greatest number in the list).*/

const arreglo1 = [3, 5, 7, 1, 6];
const arreglo2 = [23, -8, 10, 58, 8];

function ordenar(valores){
//descendente
    let valor = valores.sort(function(x,y){
    return y-x});
    console.log(valor[0]);
}
ordenar(arreglo1.concat(arreglo2));
