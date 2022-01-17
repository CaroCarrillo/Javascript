/* JS-03 Control Flow

Open up a text editor of your choice and complete the following Javascript exercises.
Exercise #1
We'll build the industry plant calendar from the opening exercise.

Part 1
First, build a function called "businessHours". Similar to the day of the week class exercise, this function should accept two parameters: dayNumber and hourNumber.
By reading the dayNumber and the hourNumber, your program should print whether it is business hours or not. It should return true if it is business hours, and false if not.
function businessHours(dayNumber, hourNumber)
Obs: consider business hours 9am - 6pm. Use the 24-hour clock system (6pm = 18).*/

let dayNumber = prompt("Cuál es el número de día que deseas buscar en el calendario?");
let hourNumber = prompt("Cuál es la hora que estás buscando?");
let daysWeek = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]


function businessHours(dayNumber, hourNumber){
    dayNumber = Number(dayNumber);
    hourNumber = Number(hourNumber);
    if ((dayNumber >=1 && dayNumber <=5) && (hourNumber >=9 && hourNumber <=18)){
        alert("Sí! es un horario laboral " + "El día que escribiste fue: " + daysWeek[dayNumber] + ", la hora que escribiste fue: " + hourNumber);
        return true; 
    }else if (dayNumber <0 || dayNumber >7 && hourNumber <=0 || hourNumber >=24){
        alert("No! este horario no existe");
        return false; 
    }else{
        alert("Este no es un horario laboral");
        return false;
    }
}
businessHours(dayNumber, hourNumber);


/*
Part 2
Now, create the function getDayNumber.

It should accept two parameters: janFirstDayNumber and yearDayNumber.

The yearDayNumber will be an int ranging from 0 to 365.

janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.

Your function should then calculate and return the day of the week corresponding to the yearDayNumber passed.

Hint: use the remainder operator (%), dividing your yearDayNumber by 7.

Part 3
Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.

Challenge
Replace the yearDayNumber and hourNumber parameters with a Date() variable.

*/