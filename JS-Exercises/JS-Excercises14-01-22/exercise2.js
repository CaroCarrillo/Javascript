/*2.- Declara e inicializa una matriz llamada 'Planetas' con 5 valores de cadena con nombres de planetas.
Console.log cada elemento en la matriz.
También console.log el índice para cada planeta.*/

var Planetas=["Mercurio", "Venus", "Tierra", "Marte", "Jupiter"];
Planetas.forEach((element,index,array) => {
    console.log(element,index);
});