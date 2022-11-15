"use strict";

let thor = "Thor es el hijo de Odín";

//Largo de la cadena:
alert(thor.length);

//Encontrar la letra o
for (let i = 0; i < thor.length; i++) {
  if (thor[i].match("o|O")) { //Un simple for recorrer la cadena y muestra la posicion de las 'o'
    alert("Se encuentra una 'o' en la posición: " + i);
  }
}

//Encontrar el carácter que ocupa la posición 3
alert(thor.charAt(3));

//¿Qué carácter ocupa la posición 1?
alert(thor.charAt(1));

//Trocea la cadena usando los espacios en blanco
let trozos = thor.split(" ");
alert(trozos);

//Reemplaza Thor por Loki
let stringLoki = thor.replace("Thor", "Loki");
alert(stringLoki);

//Recorta la cadena para que devuelva la palabra Odín
let onlyOdin = thor.substring(thor.indexOf("O"), thor.length);
alert(onlyOdin);

//¿Puedes encontrar la letra a? Demuéstralo
alert(thor.search("a"));
//El resultado es -1 porque no hay "a"

//Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)
let mitadMinus = thor.substring(thor.length / 2, thor.length);
alert(thor.substring(0, thor.length / 2) + mitadMinus.toLowerCase());
//Estoy cambiando la segunda mitad de la frase
//Como no puedo utilizar posiciones, juego con el largo de la cadena