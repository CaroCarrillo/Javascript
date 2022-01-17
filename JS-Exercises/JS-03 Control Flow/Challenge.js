/* JS-03 Control Flow

Challenge
Replace the yearDayNumber and hourNumber parameters with a Date() variable.

*/

function businessHours(yearDayNumber, hourNumber){
    yearDayNumber = yearDayNumber * 24 * 60 * 60 * 1000
    hourNumber = hourNumber * 60 * 60 * 1000
    let janFirstDayNumber = Date.parse("Dec 31, 2021");//regresa los miliseg desde el 31 de dic de 1970 hasta la fecha que le pongas al Date.parse(); para darle un parámetro legible (en milisegundos) al objeto newDate(); Le pasas un día antes para que el 1ero de enero sea el numero 1 de los 365 días del año.
    let miliseconds = yearDayNumber + janFirstDayNumber + hourNumber
    let calculatedDate = new Date(miliseconds);//Calcula la fecha por medio de los milisegundos

    if (calculatedDate.getDay() != 0 && calculatedDate.getDay !=6 && hourNumber >=9 && hourNumber <=18){
        return true;//business hours.
    }else{
        return false;
    }
}

businessHours(1,19);