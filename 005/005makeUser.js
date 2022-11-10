"use strict";

function makeUserMAL() {
  return {
    name: "John",
    ref: this
  };
}
let user = makeUserMAL();
alert(user.ref.name);

//El resultado es un TypeError
//Para referenciar propiedades del objeto, ref debe ser una función
//La función ref() podrá retornar this
//Solución:

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}
let user2 = makeUser();
alert(user2.ref().name);
