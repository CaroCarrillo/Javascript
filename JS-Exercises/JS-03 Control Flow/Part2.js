/* JS-03 Control Flow

Part 2
Now, create the function getDayNumber.
It should accept two parameters: janFirstDayNumber and yearDayNumber.
The yearDayNumber will be an int ranging from 0 to 365. CORRECCIÓN 0-364
janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.
Your function should then calculate and return the day of the week corresponding to the yearDayNumber passed.
Hint: use the remainder operator (%), dividing your yearDayNumber by 7.*/


function getDayNumber(janFirstDayNumber, yearDayNumber){
    //Esto resulve el problema:
    //return  yearDayNumber % 7 //regresa el puro índice

    //Si quieres mostrar el día es el siguiente código:
    //El usuario escoge el día con el que quiere empezar la semana, siendo éste el índice cero en el array
    let daysWeek = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
    let startDays = daysWeek.slice(janFirstDayNumber,);//El slice corta la semana desde el día que ingresó el usuario[janFirstDayNumber] hasta el final del array.
    let endDays = daysWeek.slice(0,janFirstDayNumber);//El slice corta la semana desde el índice 0 (del array preestablecido [daysWeek] que es domingo) hasta un día antes del día que escogió el usuario.
    let newDaysWeek = startDays.concat(endDays);//Se concatenan ambos arrays [startDays + endDays] en uno solo [newDaysWeek], iniciando en el día (janFirstDayNumber(del 0 al 6)) que escogió el usuario. 
    return newDaysWeek[yearDayNumber % 7]//regresa el día que se encuentra en el índice del nuevo arreglo
}
console.log(getDayNumber(5,36)) 

