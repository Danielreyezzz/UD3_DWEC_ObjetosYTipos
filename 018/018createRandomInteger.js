"use strict";

"use strict";

let createRandomInt = (min, max) => {
  //El procedimiento es casi igual que para devolver un float
  //La diferencia es max + 1 . Ese 1 nos permite coger los extremos, es decir, incluir el max
  //Para evitar los decimales utilizamos Math.floor(). Si redondearamos hacia arriba, podríamos devolver un número mayor al máximo
  return Math.floor(min + Math.random() * (max + 1 - min));
};

alert(createRandomInt(1, 5));
