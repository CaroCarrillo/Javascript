/*Escribe un algoritmo para encontrar el más grande entre los 5 números diferentes introducidos por el usuario.
Imprima el número más grande en la consola.*/

function numeroMayor (a,b,c,d,e){
    if (a>b && a>c && a>d && a>e){
        alert("El número más grande introducido es: " + a);
    } else if (b>a && b>c && b>d && b>e){
        alert("El número más grande introducido es: " + b);
    } else if (c>a && c>b && c>d && c>e){
        alert("El número más grande introducido es: " + c);
    }  else if (d>a && d>b && d>c && d>e){
        alert("El número más grande introducido es: " + d);
    }  else if (e>a && e>b && e>c && e>d){
        alert("El número más grande introducido es: " + e);
    }
}

let numero1 = parseInt(prompt("escribe el número 1: "));
let numero2 = parseInt(prompt("escribe el número 2: "));
let numero3 = parseInt(prompt("escribe el número 3: "));
let numero4 = parseInt(prompt("escribe el número 4: "));
let numero5 = parseInt(prompt("escribe el número 5: "));

numeroMayor(numero1,numero2,numero3,numero4,numero5);