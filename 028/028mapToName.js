"use strict";

let acdc = { name: "ACDC", age: 25 };
let metallica = { name: "Metallica", age: 30 };
let guns = { name: "Guns and Roses", age: 28 };
let bands = [acdc, metallica, guns];

//Con .map nos aseguramos de introducir los valores que queremos, y no todos
let names = bands.map(valor => valor.name);

alert(names);
