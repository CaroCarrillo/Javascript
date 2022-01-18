/*
Práctica:

Crea un traductor para un día de la semana.
Tu programa debe leer una variable llamada "dayNumber" e imprimir (con console.log) el día correspondiente de la semana, donde 0 es domingo y 6 es sábado.
Para cualesquiera otros valores, tu programa debe imprimir "Número de día inválido".
Prueba tu programa para todos los valores de días de lal semana.

*********************************  SWITCH   **************************************
*/

let daysWeek = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
let day = prompt("Ingresa un numero: ")

function validateDay(day){
day = Number(day)

    switch (day){
        case 0:
            alert(daysWeek[day]);
            break;
        case 1:
            alert(daysWeek[day]);
            break;
        case 2:
            alert(daysWeek[day]);
            break;
        case 3:
            alert(daysWeek[day]);
            break;
        case 4:
            alert(daysWeek[day]);
            break;
        case 5:
            alert(daysWeek[day]);
            break;
        case 6:
            alert(daysWeek[day]); 
            break;
        default:
            alert("Este numero no corresponde a ningun dia de la semana");
            break;
}
}
validateDay(day);