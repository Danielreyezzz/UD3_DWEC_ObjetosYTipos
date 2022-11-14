"use strict";

let checkSpam = (str) => {
    
  return str.toLowerCase().includes("viagra") ||
    str.toLowerCase().includes("xxx")
    ? true
    : false;
};

alert(checkSpam("compra ViAgRA ahora"));
