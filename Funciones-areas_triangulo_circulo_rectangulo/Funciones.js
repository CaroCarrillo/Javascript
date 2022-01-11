/*funcion de area triángulo*/
function areaTriangulo(){
    var base = 2;
    var altura = 5;
    var resTriangulo = (base*altura)/2;
    alert("El area del triángulo es: " + resTriangulo);
}
areaTriangulo();

/*funcion de area circulo*/
function areaCirculo(radio){
    var resCirculo = Math.PI*(radio**2);
    console.log("El área del círculo es: " + resCirculo);
}
areaCirculo(20);

/*funcion de area rectángulo*/
function areaRectangulo(b=10, a=4){
    alert("El Área del rectángulo es: "+(b*a));
}
areaRectangulo();
