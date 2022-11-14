"use strict";
let readNumber = () => {
  let number;
  do {
    number = prompt("Escribe un número: ");
    //not isFinite nos sirve perfectamente para saber si se trata de un número
  } while (!isFinite(number));
  //Ternario para devolver null en el caso de cancelar o dejar la linea en blanco, o devolver el mismo número si estas condiciones no se cumplen.
  return number === null || number === "" ? null : number;
};

alert(readNumber());
