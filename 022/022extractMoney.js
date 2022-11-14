"use strict";

let extractCurrencyValue = (dollars) => {
  //La única solucion que se me ha occurrido es devolver una subcadena desde la posición 1 hasta el final del string
  //El '+' es equivalente a parseInt()
  return +dollars.substring(1);
};

alert(extractCurrencyValue("$120") === 120);
