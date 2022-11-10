"use strict";

function Calculator()  {
  //En el constructor, a los métodos se le agregan this.
  //En este caso se almacenan las variables a y b directamente con el metodo read()
  this.read = () => {
    this.a = +prompt("Escribe el primer número:");
    this.b = +prompt("Escribe el segundo número:");
  },
    this.sum = () => {
      return this.a + this.b;
    },
    this.mul = () => {
      return this.a * this.b;
    };
};

//Instanciamos un objeto. Lo llamamos calculadora
//A este objeto le pasamos los métodos que ha obtenido del constructor
let calculadora = new Calculator();
calculadora.read();
alert(calculadora.sum());
alert(calculadora.mul());
