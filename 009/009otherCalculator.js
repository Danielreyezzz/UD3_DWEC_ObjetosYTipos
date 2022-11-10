"use strict";

let Calculator = () => {
  this.a = a;
  this.b = b;
  this.read: () => {
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

let calculadora = new calculator()
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
