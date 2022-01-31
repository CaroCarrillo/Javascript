var vp = document.getElementById("imagen");

var papel = vp.getContext("2d");



var fondo = {

  url: "cajero.gif",

  cargaOK: false

}



fondo.imagen = new Image();

fondo.imagen.src = fondo.url;

fondo.imagen.addEventListener("load", cargarFondo);



function cargarFondo()

{

  fondo.cargaOK = true;

  console.log(fondo.imagen);

  papel.drawImage(fondo.imagen, 0, 0);

  for (var i = 0; i < caja.length;i++){

    caja[i].cargaOK = true;

    papel.drawImage(caja[i].imagen, 180, (25 * i)+80); 

  }

}



Le agradezco a Freddy por su valiosa explicación y me tome la molestia de realizar este reto.  Cabe resaltar que para que funcione bien las imagenes deben tener el fondo que se llama cajero.gif.  Las imagenes de los billetes se llaman cien, cincuenta, veinte, diez y cinco con extension jpg.



cajero.gif  ancho: 325 alto: 256

y la de los billetes: ancho: 37 alto: 87 los billetes estan en forma vertical.