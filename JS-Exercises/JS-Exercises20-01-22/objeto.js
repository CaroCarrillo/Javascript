let objeto = {
    nombre: "Ulises",
    apellido: {
        paterno: "Portuguez",
        materno: "Gordillo"
    },
    edad: 34,
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido.paterno
    }

}

document.getElementById("boquita").innerHTML = objeto.nombreCompleto();
