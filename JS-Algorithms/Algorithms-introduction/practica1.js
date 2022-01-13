/*Escriba un programa en el que un usuario introduzca el número de tareas que ha completado. El programa devuelve una de las siguientes etiquetas a la consola:
**Failed**
**Insufficient**
**Good**
**Excellent**
**Error**
en función de las condiciones:

Fallaron si obtuvieron 6 o menos
Insuficiente si obtuvieron > 6 pero menos de 9 (9 incluidos)
Bueno si obtuvieron > 9 pero menos de 14 (14 incluidos)
Excelente si obtuvieron 15 puntos
Error si los participantes introducen un número negativo o un número fuera del intervalo admitido (fuera de 0 a 15)*/

function calification(a){
    if (a < 0 || a > 15){
        alert("Error");
    }else if (a <= 6){
        alert("Failed");
    }else if (a > 6 && a <= 9){
        alert("Insufficient");
    }else if (a > 9 && a <= 14){
        alert("Good");
    }else if (a == 15)
        alert("Excellent");
}

let getCalification = parseInt(prompt("Ingrese el número de tareas que ha completado: "))
calification(getCalification);