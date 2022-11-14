"use strict";

let i = 0;
while (i != 10) {
  i += 0.2;
}
alert(isFinite(i));

//Es infinito porque i += 0.2 nunca llega a ser 10
//Una suma de decimales de este tipo da lugar a pérdida de precisión
//Se recomienda no hacer comprobaciones de igualdad con números decimales para evitar estas cuestiones
