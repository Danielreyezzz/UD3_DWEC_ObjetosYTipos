"use strict";

let camelize = (str) => {
    //En primer lugar hemos creado un string vacío y un array separando la cadena por el caracter '_'
    let camelized = "";
    let array = str.split('_');
    //A continuación hemos recorrido este array y hemos transformado el primer caracter de cada seccion a mayusculas
    //El if i > 0 nos evita transformar la primera letra de la palabra a mayusculas
    //Luego a cada sección le hemos concatenado la siguiente
    for (let i in array) {
        if (i > 0) {
            camelized += array[i].charAt(0).toUpperCase() + array[i].slice(1);
        } else {
            camelized += array[i]
        }
    }
    return camelized;
}
alert(camelize("hola_amigos_camel"));
