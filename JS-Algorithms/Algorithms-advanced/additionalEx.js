/*Additional Exercises
Arrays
var values1= ['Apple', 1, false];
var values2 = ['Fries', 2 ,true];
var values3 = ['Mars', 9, 'Apple'];
Create a function that compares the 3 arrays and finds any common elements. Print out the common elements.

Primer intento de solución - utilizando método filter
var values1= ['Apple', 1, false];
var values2 = ['Fries', 2 ,true];
var values3 = ['Mars', 9, 'Apple'];

values1.filter(function (elemento){
    for(let i = 0; i < values2.length; i++){
        if(values2[i] === elemento){
            console.log(elemento)
        }
        if(values3[i] === elemento){
            console.log(elemento)
        }
    }
})
values2.filter(function (elemento){
    for(let i = 0; i < values2.length; i++){
        if(values3[i] === elemento){
            console.log(elemento)
        }
    }
})*/

//Segundo intento de solución

var values1 = ['Apple', 1, false];
var values2 = ['Fries', 2 ,true];
var values3 = ['Mars', 9, 'Apple'];

function compareArrays (array1, array2, array3){//Le pasas 3 parámetros a la función
    for (let i = 0; i < array1.length; i++){//recorres cada uno de los 3 arreglos, se puede usar así porque los arreglos tienen los mismos indices(3 (0,1,2))
        for (let j = 0; j < array2.length; j++) {//comparas los elementos de cada arreglo
            if (array1[i] === array2[j]){
                console.log(array1[i]);
                }
            if (array1[i] === array3[j]){
                console.log(array1[i]);
                }
            if (array2[i] === array3[j]){
                console.log(array2[i]);
                }

        }
    }
}
compareArrays(values1,values2,values3);