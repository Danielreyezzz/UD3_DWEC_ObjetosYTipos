"use strict";

//For in que actualiza y multiplica el valor si su tipo es 'number'
let multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
};

let menu = {
  width: 200,
  height: 300,
  title: "Mi menú",
};

multiplyNumeric(menu);

alert(Object.values(menu));
