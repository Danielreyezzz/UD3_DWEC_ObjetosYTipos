"use strict";
let readNumber = () => {
  let number;
  do {
    number = prompt("Escribe un número: ");
    //not isFinite nos sirve perfectamente para saber si se trata de un número 
  } while (!isFinite(number));
  return number === null || number === "" ? null : number;
};

alert(readNumber());
