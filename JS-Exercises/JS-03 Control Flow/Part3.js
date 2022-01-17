/* JS-03 Control Flow

Part 3
Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.
*/

//va de 0-364 donde 1ero enero es 0 y donde 0 inicia en Domingo..Lunes..Martes..

function businessHours(yearDayNumber, hourNumber){
    if (yearDayNumber% 7 != 0 && yearDayNumber % 7 !=6 && hourNumber >=9 && hourNumber <=18){
        return true;//business hours.
    }else{
        return false;
    }
}
console.log(businessHours(8, 19));