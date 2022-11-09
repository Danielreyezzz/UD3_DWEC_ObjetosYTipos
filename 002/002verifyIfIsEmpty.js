"use strict";

let isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
//Object.keys() nos devuelve un array con las claves de las propiedades
//Si el largo de esta matriz es 0, obviamente el objeto estará vacío

//Pruebas:
let schedule = {};
alert(isEmpty(schedule));
schedule["8:30"] = "Hora de levantarse";
alert(isEmpty(schedule)); // false
