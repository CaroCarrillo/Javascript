/*class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    //Getter

    get area() {
        return this.calcArea();
    }

    //Method
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);
const rectangulo = new Rectangle(20, 30);
const rectangulo2 = new Rectangle(25, 15);

console.log(square.area);
console.log(rectangulo.area);
console.log(rectangulo2.area);



class persona {
  constructor(name, year){
    this.name = name;
    this.year = year;
  }
}

const persona1 = new persona("Guillermo",1987);
const persona2 = new persona("Angeles", 2000);

console.log(persona1);
console.log(persona2);

document.getElementById("ID").innerHTML=persona1;

// var objeto = {
//   name : "Guillermo",
//   year : 1987
// }

// var objeto2 = {
//   name : "David",
//   year : 1987
// }
*/


class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`);
    }
    static definicion() {//metodo estático
        console.log("Una persona es un ser humano");
    }

}
let persona =new Persona("Carolina", 26);//poner parámetros que le pasamos al constructor
persona.saludar()//Instancia, nos referimos a la clase seguido del método
Persona.definicion();


//herencia: una clase puede heredar las propiedades de otra. Ejemplo:

class Desarrollador extends Persona {
}
Desarrollador.definicion();//imprime lo del método definicion de la clase persona

//herencia: una clase puede usar el método de otra y utilizarlo con un nuevo método
class Desarrollador2 extends Persona{
    saludoDesarrollador(){
        this.saludar();
        console.log(`Soy una desarrolladora de software`)
    }
}
let desarrollador = new Desarrollador2("Estefanía", 25)
desarrollador.saludoDesarrollador();


//herencia: una clase puede usar el constructor de otra clase y además el suyo mismo

class Desarrolador3 extends Persona{
    constructor(nombre,edad,tipo){
        super(nombre,edad);
    }
    saludoDesarrollador3(){
        this.saludar();
        console.log(`Soy una desarrolladora de software inicial`)
    }
}

let desarrollador3 = new Desarrollador3("Carolina",23,"Backend");
desarrollador3.saludoDesarrollador3();