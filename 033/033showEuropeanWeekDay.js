"use strict";

function getLocalDay(date, europeo) {
  //El procedimiento es el mismo que el ejercicio anterior
  //La diferencia es que paso un booleano para identificar si vamos a devolver el dia en europeo no

  let dia = date.getDay();
  //Como el día 0 que es domingo, en paises europeos es 7, simplemente cambiamos el día de 0 a 7
  //A la condicion le añadimos que europeo sea true
  if (dia == 0 && europeo) {
    dia = 7;
  }
  return dia;
}

let date = new Date(2012, 0, 1);

//Comprobamos que un domingo en europeo es 7, pero en español 0
alert(getLocalDay(date, true));
alert(getLocalDay(date, false));
