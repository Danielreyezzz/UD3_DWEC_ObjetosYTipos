"use strict";

let extractCurrencyValue = (dollars) => {
  return +dollars.replaceAll(/\D/, "");
};

alert(extractCurrencyValue("$120") === 120);
