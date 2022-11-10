"use strict";

//Escribimos la solución directamente:
function A() {}
function B() {}
let a = structuredClone(A());
let b = structuredClone(B());

//Con structuredClone() clonamos el objeto con todas sus propiedades anidadad.
//Las funciones A y B tienen las mismas propiedades (en este caso están vacías)
//Al ser una clonación anidada, tenemos que 'a' si es == 'b'
alert( a == b );//Ahora si devuelve true