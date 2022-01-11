//Este es un comentario de una linea

/*Este es
un comentario 
multilinea
*/

// Esta es una alerta
alert("Estoy vivo!!!!");

//Mostrar información en la consola

console.log("Este es un mensaje para la consola");

var nombre = "Carolina"; //Variables entre comillas son consideran como cadenas de texto
var apellidos = "Carrillo Quezada";
var edad = 29; //Si la variable no tiene comillas, se considera como valor númerico

console.log(nombre, apellidos, edad);

alert("Mi nombre es: " + nombre);
console.log("Mis apellidos son: " + apellidos);

alert(
  "Mi nombre es: " +
    nombre +
    " ,mis apellidos son: " +
    apellidos +
    " y mi edad es: " +
    edad
);

// Otro ejemplo de como mostrar variables en consola

var numero1 = 5;
var numero2 = 7;
var resultado = numero1 - numero2;

console.log("El resulto de la suma es: " + (numero1 + numero2));

// Sintaxis básica de una funcion

function nombrefuncion(parametros) {
instrucciones;
}

//Declaracion de funcion

function Saludar() {
alert("Hola a todos");
}

Saludar();

//Expresion de funcion

var Cantar = function () {
alert("A mi me gusta cantar");
};
Cantar();

//Funcion sin parametros
function sumar() {
    var numero1 = 5;
    var numero2 = 6;
    var suma = numero1 + numero2;
    alert("La suma de la funcion sin parametros es: " + suma);
}

sumar();

//Funcion con parametros
function restar(num1, num2, resta) {
    var num1 = 6;
    var num2 = 8;
    var resta = num2 - num1;
    alert("La resta de la funcion con parametros es: " + resta);
}

restar();

//Otra funcion con parametros

function Cuadrado(cuadrado) {
    var rescuadrado = cuadrado * cuadrado;
    alert("El cuadrado del numero es: " + rescuadrado);
}

Cuadrado(4);

function Operaciones(num1, num2, num3, suma, resta, multi) {
    var suma = num1 + num2 + num3;
    var resta = num1 - num2 - num3;
    var multi = num1 * num2 * num3;

    alert(
        "La suma es: " +
        suma +
        ", la resta es: " +
        resta +
        " y la multiplicacion es: " +
        multi
    );
}

Operaciones(5, 6, 7);

// Funcion Prompter

function Prompter() {
    var respuesta = prompt("Buenos dias, cual es tu nombre?");
    alert("Es un gusto saludarte " + respuesta);
}

Prompter();

function AreaCuadrado() {
    var datoingresado = prompt("Ingresa un numero");
    var resultado = datoingresado * datoingresado;
    alert(
        "El area del cuadro es " +
        resultado +
        " por que el numero que ingresaste es " +
        datoingresado
    );
}
AreaCuadrado();

function confirmacion() {
    var pregunta = confirm(
        "Deseas visitar Google.com y buscar fotos de perritos?"
    );
    if (pregunta) {
        alert("Te enviare rapidamente");
        window.location = "https:www.google.com";
    } else {
        alert("No hay problema, nos vemos luego");
    }
}

//getElementByID

function cambiarColor(nuevoColor) {
    var elem = document.getElementById("parrafo");
    elem.style.color = nuevoColor;
}

function Accion(Tipo) {
    var elem = document.getElementById("DivBotones");
    if (Tipo == "Ocultar") elem.style.display = "none";
    else elem.style.display = "";
}
