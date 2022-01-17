function ageValidation(){
    let userName = prompt("Ingresa tu nombre")
    let userAge = Number(prompt("Ingresa tu edad"))

    if(userAge >= 18 && userAge <= 29){
        alert("Felicidades " + userName + ", cumples con los requisitos para ser aceptado en el bootcamp Java Fullstack de Generation")
    }
    else{
        alert(userName + " No cumples con los requisitos para el programa")
    }
}
alert("El siguiente programa determina si una persona puede ser parte del programa de Java Full stack de Generation apartir de su Edad, suerte. ")
ageValidation()