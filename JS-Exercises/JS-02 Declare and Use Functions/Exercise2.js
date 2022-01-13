/*JS-02 Declare and Use Functions

Before each exercise, make sure you think about the 4 steps of a function.
1. Understand the purpose of the function.
2. Define the data that comes into the function from the caller (in the form of parameters)!
3. Define what data variables are needed inside the function to accomplish its goal.
4. Decide the set of steps that the program will use to accomplish this goal (the algorithm).
Start coding up your answer once you have completed step 4.
*/

/*
Exercise #2
Part 1
Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.*/

var fulano1 = prompt("ingresa el nombre de tu amigo 1: ");
var fulano2 = prompt("ingresa el nombre de tu amigo 2: ");
var fulano3 = prompt("ingresa el nombre de tu amigo 3: ");

function saludar(fulano1, fulano2, fulano3) {
    console.log(
        "Hola mis queridos amigos " + fulano1 + ", " + fulano2 + ", " + fulano3
    );
}
saludar(fulano1, fulano2, fulano3);


/*
Part 2
Ed would like to create a function that takes in a birth year and returns the age.

i.e. 1990 returns 30*/

var edad1;
var edad2;
var edad3;

var año1 = Number(prompt("cual es tu año de nacimiento " + fulano1 + " ?"));
var año2 = Number(prompt("cual es tu año de nacimiento " + fulano2 + " ?"));
var año3 = Number(prompt("cual es tu año de nacimiento " + fulano3 + " ?"));

const actual = 2022;
function calcularEdad(año1, año2, año3) {
    edad1 = actual - año1;
    edad2 = actual - año2;
    edad3 = actual - año3;
    
    console.log("las edades son: " + edad1 + ", " + edad2 + ", " + edad3);
}
calcularEdad(año1, año2, año3);


/*
Part 3
Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.*/

function SaludoCompleto() {
    console.log(
        "Bienvenido " +
        fulano1 +
        " tu edad es: " +
        edad1 +
        ", " +
        "Bienvenido " +
        fulano2 +
        " tu edad es:" +
        edad2 +
        ", " +
        "Bienvenido " +
        fulano3 +
        " tu edad es: " +
        edad3
    );
}
SaludoCompleto();

