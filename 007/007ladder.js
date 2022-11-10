"use strict";

//La solución es retornar this en cada función
//Al devolver el objeto, está prerarado para recibir otra función:
//Podemos comprobar esto haciendo alert(ladder.up()) y vemos que devuelve Object object
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
