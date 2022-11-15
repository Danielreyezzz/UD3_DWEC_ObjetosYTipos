"use strict";
let personajes = [
{id:1, nombre: "Daniel", pelicula: "Daniel el travieso" },
{id: 2, nombre: "Laura", pelicula: "Laura Valiente, la informática cobarde" },
{id: 3, nombre: "Luis", pelicula: "El ataque del aire acondicionado" }
]

//Utilizamos reduce para iterar sobre el array de personajes
//En nuestro acumulador(obj) acumulamos el valor actual del valor id
//Devolvemos el acumulador y tendremos nuestro array ordenado por id

let groupById = (personajes) => {
    return personajes.reduce((obj, valor) =>{
        obj[valor.id] = valor;
        return obj
    })
}

console.log(groupById(personajes))