"use strict";

let ucFirst = (str) => {
  //Reemplazo el primer caracter del string por él mismo en mayusculas
  return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
};

alert(ucFirst("john"));
