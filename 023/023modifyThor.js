"use strict";

let thor = "Thor es el hijo de Odín";

//Largo de la cadena:
alert(thor.length);

//Encontrar la letra o
//Existen varias 'o' en la cadena, pero he supuesto que se pedía encontrar la primera
alert(thor.indexOf("o"));

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
let mitadMinus =
thor.substring(0, 11);

thor.substring(thor.length / 2, thor.length);
alert(mitadMinus.toLowerCase() + thor.substring(thor.length / 2, thor.length));
