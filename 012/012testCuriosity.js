"use strict";

alert( 9999999999999999 );

//Devuelve 10000000000000000
//JavaScript interpreta los números como floats y tiene un límite de 64-bits
//Debido a esto, números como el mostrado perderian precisón. Para evitar este problema el número se redondea