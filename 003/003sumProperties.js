"use strict";

let salaries = {
  Harry: 100,
  Ron: 160,
  Hermione: 130,
};

//Inicializo sum a 0 para establecer que se guardarán números
let sum = 0;
//For in para recorrer objetos. Se suman los valores asociados a las claves(keys)
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);
