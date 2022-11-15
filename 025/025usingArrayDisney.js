"use strict";

//No he hecho comentarios extra sobre casi ningun ejercicio porque los enunciados son autoexplicativos
let disney = [
  { nombre: "Hércules", pelicula: "Hércules" },
  { nombre: "Megana", pelicula: "Hércules" },
  { nombre: "Hades", pelicula: "Hércules" },
  { nombre: "Campanilla", pelicula: "Peter Pan" },
  { nombre: "Wendy", pelicula: "Peter Pan" },
];
//Meter a Peter Pan al final del array disney.
disney.push({ nombre: "Peter Pan", pelicula: "Peter Pan" });

//Pintar el array
for (let key of disney) {
  alert(key.nombre + " : " + key.pelicula);
}

//Meter a El capitán Garfio al principio del array, no olvides la película
disney.unshift({ nombre: "Capitan Garfio", pelicula: "Peter Pan" });

//Meter al cocodrilo detrás del capitán, no olvides la película
disney[1] = { nombre: "Cocodrilo", pelicula: "Peter Pan" };

//Obtener los personajes de la película de "Peter Pan"; y mostrarlos uno a uno.
let peterNombres = disney.filter((valor) => valor.pelicula == "Peter Pan");
for (let i of peterNombres) {
  alert(i.nombre);
}

//Encontrar el índice de Campanilla.
alert(disney.findIndex((nombre) => nombre.nombre == "Campanilla"));

//Buscar al cocodrilo.
let cocodriloFinder = disney.filter((valor) => valor.nombre == "Cocodrilo");
for (let i of cocodriloFinder) {
  alert(i.nombre);
}

//Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los elementos del array.
let shuffle = (array) => {
  //sort ordena un array ¿Como? pues en nuestro caso generando un número entre 0 y 1 al que se le resta 0.5
  array.sort(() => Math.random() - 0.5);
};
