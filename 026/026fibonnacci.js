"use strict";

let fibo = [0, 1];

for (let i = 2; i <= 20; i++) {
  fibo.push(fibo[i - 1] + fibo[i - 2]);
  console.log(fibo[i]);
}

//La sucesión de fibonnacci se trata de: f(x) = f(x-1) + f(x-2)
//Sabiendo esto, solo necesitamos un array inicial con valores 0 y 1 con los cuales empezar a operar
//Con el método push iremos insertando los valores hasta la posición requerida, que en este caso es 20

