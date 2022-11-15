"use strict";

let grupos = [
    {nombre: "ACDC", genero: "Rock"},
    {nombre: "Cold Play", genero: "Pop"},
    {nombre: "NCT Dream", genero: "K-Pop"},
    {nombre: "Metallica", genero: "Heavy Metal"}
];

//filtra los grupos por género obtenido aquellos que son de Heavy Metal.
let heavyMetal = grupos.filter((valor) => valor.genero == "Heavy Metal");
//Aquí simplemente devemos utilizar filter y nos devolverá el único array con género Heavy Metal

//Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.
let coldPlayFinder = grupos.find((valor) => valor.nombre == "Cold Play");
//.find nos devuelve el array cuyo valor nombre es igual a Cold Play


//¿En qué posición del array se encuenta “Cold Play”?
alert(grupos.findIndex((valor) => valor.nombre == "Cold Play"));
//Con findIndex obtenemos que la posicion es 1

