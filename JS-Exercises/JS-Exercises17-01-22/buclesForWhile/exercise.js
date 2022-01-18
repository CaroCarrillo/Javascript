/*
Sintaxis
for ([expresion-inicial]; [condicion]; [expresion-final])sentencia
for ([expresion-inicial]; [condicion que se tiene que cumplir]; [incremento])sentencia


for(var i=0; i<9; i++){
    n=0;
    n+=i;
    console.log(n);
}

//igual, pero más sencillo
for(var i=0; i<9; i++){
    console.log(i);
}

const i= 1;
i= 2;
console.log(i);

for (let num2 = 0; num2 <=9; num2++){
    for (let num1 = 0; num1 <=9; num1++){
        console.log(num2+" "+num1);
    }
} 


for (let num2 = 0; num2 <=3; num2++) {
    for (let num1 = 0; num1 < 3; num1++) {
        console.log(num2 + " " + num1);
    }


//terminamos en 55
//en el segundo ciclo son 5 números
//el numero 
for (let num2 = 0; num2 <=5; num2++) {
    for (let num1 = 4; num1 <= 5; num1++) {
        console.log(num2 + " " + num1);
    }
}}

//crear un ciclo que vaya del 0 al 15 de tres en tres
for (let i=0; i<=15; i+=3){//se tiene que asignar "i+=3"
    console.log(i);


var n = 0;
var x = 0;

while(n<3){
    n++;//es lo mismo que n+1
    x= x + n //es lo mismo x += n;
    console.log(x);
}

var n = 0;
var x = 0;

while (n < 5) {
    n++;
    x += n;
    console.log(x);
}
}*/
let n=0
while (n<50){
    n++;
    console.log("Hello from the while")
    for(let i=0; i<25; i++){
        console.log("Hello from the for");
    }
}