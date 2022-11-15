"use strict";

function getLastDayOfMonth(año, mes) {
  //He descubierto que si el valor de día se deja en 0, este se corrige solo y pasa a tomar el valor del último día
  //Iba a usar un switch pero este descubrimiento me ahorra muuucho código
  //Necesitamos sumar 1 al valor del mes o nos devolverá el mes anterior(febrero es el mes 2 en el contructor)
  let date = new Date(año, mes + 1, 0);
  return date.getDate();
}

alert(getLastDayOfMonth(2012, 0)); 
//Devuelve 31
alert(getLastDayOfMonth(2012, 1));
//Devuelve 29
alert(getLastDayOfMonth(2013, 1));
//Devuelve 28
