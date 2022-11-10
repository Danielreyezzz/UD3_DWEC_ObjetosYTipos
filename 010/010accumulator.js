"use strict";

function Accumulator(startingValue) {
  //El valor inicial de value será el valor de entrada  
  this.value = startingValue;
  this.read = () => {
    //El valor de value se actualizará sumandose al número que el usuario escriba
    this.value += +prompt("Escribe un nuevo número:");
  };
}

//Creamos un objeto pasandole por parametro un número tal y como es constructor demanda
let accumulator = new Accumulator(2);
accumulator.read();
accumulator.read();
//Accedemos a la propiedad value del objeto
alert(accumulator.value);
