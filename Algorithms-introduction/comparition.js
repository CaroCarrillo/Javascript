/*
CONDICIONALES

 * Exercise #1
 * Create a function that takes in one number 
 * and checks if the number is greater than 10. Print out to the console true if it is greater and false otherwise.*/

function greaterThanTen(number){
    if (number > 10){
        alert(true);//alert muestra la ventana con el resultado
    }else{
        alert(false);
    }
}

let recieveNumber = parseInt(prompt("Ingrese un número: ")) /*prompt muestra la ventana con la pregunta y regresa una cadena de texto, 
parseInt cambia la cadena a tipo número*/

greaterThanTen(recieveNumber);


/**
 * Exercise #2
 * Create a function that takes in one number
 * and checks if it is divisible by 4 or divisible by 9. 
 * Print out to the console true if a number
 * if divisible by 4 or 9, and false if a
 * number is not divisible by either number.
 */

function divisible(number){
    if(number % 4 == 0 || number % 9 == 0){
        console.log(true);
    }else{console.log(false)}
}
divisible(4);

