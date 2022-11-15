"use strict";

function getWeekDay(date) {
//Creamos un array con los días abreviados. 
  let dias = ["SU","MO", "TU", "WE", "TH", "FR", "SA"];
  //getDate() te devuelve el día de la semana dada una fecha
  //Devolvemos la posición dentro del array correspondiente a ese día
  //Necesitamos cambiar el domingo al principio, ya que contamos los arrays desde 0
  return dias[date.getDay()];
}

let date = new Date(2012, 0, 3); 
alert(getWeekDay(date)); 