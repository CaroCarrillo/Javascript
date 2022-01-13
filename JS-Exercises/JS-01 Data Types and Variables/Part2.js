/*JS-1 Data Types and Variables


Part 2: New contender
Complete each challenge individually. Use all resources available.
*/

/*
Challenge 1: Create an Age Calculator
Store your birth year in a variable. Store a future year in another variable. Calculate your possible ages for the future year and display it in the console. Example: If you were born in 1988, then in 2026 you’ll be 37 or 38 (depending on the month in 2026).*/



function edad(){
    var datoAño = prompt("Ingresa el año en el que naciste");
    var datoIngresado = prompt("Ingresa un año en el futuro:");
    var resultado = datoIngresado-datoAño;
    alert("Tu edad en ese año será: "+ resultado );
}
edad();

/*Challenge 2: Create an information card
Create a card holding 3 pieces of information about a person, such as Name, Location, and Hobby. Each piece of information should be a variable. Display the card with the information in the correct place. Example: “Hi, my name is John. I live in South Africa and enjoy drinking homemade wine.” */

var persona = {
    Nombre: "Carolina",
    ubicacion: "Guadalajara",
    hobby: "acariciar perritos", 
};

alert("Hola mi nombre es: " + persona.Nombre + ", vivo en: " + persona.ubicacion + ", mi hobby es: " + persona.hobby);