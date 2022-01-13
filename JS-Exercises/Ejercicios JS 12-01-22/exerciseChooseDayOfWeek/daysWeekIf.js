/*
Práctica:

Crea un traductor para un día de la semana.
Tu programa debe leer una variable llamada "dayNumber" e imprimir (con console.log) el día correspondiente de la semana, donde 0 es domingo y 6 es sábado.
Para cualesquiera otros valores, tu programa debe imprimir "Número de día inválido".
Prueba tu programa para todos los valores de días de lal semana.

***********************************  IF  **************************************
*/

let daysWeek = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
let day = prompt("Ingresa un numero: ")

function validateDay(day){
    day = Number(day)
    if(day >= 0 && day <= 6){
        console.log(daysWeek[day])
    }else{
        console.log("Este numero no corresponde a ningun dia de la semana")
    }
}
validateDay(day);