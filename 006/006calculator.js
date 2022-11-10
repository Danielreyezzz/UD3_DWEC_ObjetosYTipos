"use strict";

let calculator = {
//Propiedades a y b inicializadas a 0 para establecer que estamos trabajando con numbers
  a: 0,
  b: 0,
//Para actualizar un valor dentro del objeto utilizamos this.key
  read: () => {
    this.a = +prompt("Escribe el primer número:");
    this.b = +prompt("Escribe el segundo número:");
  },
  sum: () => {
    return a + b;
  },
  mul: () => {
    return a * b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
