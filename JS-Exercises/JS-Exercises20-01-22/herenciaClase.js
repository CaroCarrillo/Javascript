
//por medio de un prompt nos pida el apellido del padre, el nombre para el primero y segundo hijo y se impriman automáticamente

let apellido = prompt("Cuál es el apellido del padre?");
let nombreHijo1 = prompt("Cuál es el nombre del 1er hijo?");
let nombreHijo2 = prompt("Cuál es el nombre del 2do hijo?");

class padre {
    constructor(apellido) {
        this.apellidoPadre = apellido;
    }
}

class hijo extends padre {
    constructor(nombre, apellido) {
        super(apellido);
        this.nombreHijo = nombre;
    }

    registro() {
        return (
            "El nombre del hijo será: " + this.nombreHijo + " " + this.apellidoPadre);
    }
}
let Hijo1 = new hijo(nombreHijo1, apellido);
let Hijo2 = new hijo(nombreHijo2, apellido);

document.getElementById("Id").innerHTML = Hijo1.registro();
document.getElementById("Id2").innerHTML = Hijo2.registro();
