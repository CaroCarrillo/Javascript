/*JS-02 Declare and Use Functions

Before each exercise, make sure you think about the 4 steps of a function.
1. Understand the purpose of the function.
2. Define the data that comes into the function from the caller (in the form of parameters)!
3. Define what data variables are needed inside the function to accomplish its goal.
4. Decide the set of steps that the program will use to accomplish this goal (the algorithm).
Start coding up your answer once you have completed step 4.

Exercise #1
Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?

Return the value of what she should be paying.*/

var pago = Number(prompt("introduce el numero de pagos realizados este mes: "));
var gasto = Number(prompt("ingresa el total de tus gastos en dolares: "));

function payments( pago, gasto ){

    var resPago = ((pago*3)+ gasto)*1.01;
    alert("el total a pagar es: " + resPago);
}

payments(pago, gasto);