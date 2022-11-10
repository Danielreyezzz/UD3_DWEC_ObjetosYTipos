"use strict";
// let str = "Peter";
// str.test = 5;
// alert(str.test);

//El resultado es un TypeError con el use strict
//Mi solución es crear un objeto y pasarle por parámetro Peter
//Un string no puede transformarse en objeto así como así, por eso necesitamos que sea un objeto desde el principio.

let str = new Object("Peter"); 
str.test = 5;
alert(str.test);

