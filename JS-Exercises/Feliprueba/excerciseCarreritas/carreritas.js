carreritas = ["Lucia", "Roberto", "María", "Jesús", "Andrea", "José"];
console.log(carreritas);

//Andrea adelanta a María
carreritas.splice(4,1)
carreritas.splice(2,0,"Andrea");
console.log(carreritas);

//José es descalificado de la carrera
carreritas.pop();
console.log(carreritas);

//Detrás de Lucía y antes de Roberto se clasifican 3 nuevos corredores: Cristóbal, Fernanda y Armando
carreritas.splice(1,0,"Armando");
carreritas.splice(1,0,"Fernanda");
carreritas.splice(1,0,"Cristóbal");
console.log(carreritas);

//Hay un nuevo concursante que toma el primer puesto: Federico
carreritas.unshift("Federico");
console.log(carreritas);
