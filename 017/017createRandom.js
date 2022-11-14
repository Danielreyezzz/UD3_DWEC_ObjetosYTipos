"use strict";

let createRandom = (min, max) => {
    return min + Math.random() * (max - min);
}

alert(createRandom(3,9));

/*Multiplicar Math.random() * max - min nos acota el intervalo de 0 al máximo menos el mínimo
Solo necesitamos sumar a esto el mínimo para que el intervalo sea el que queramos*/