"use script";

let truncate = (str, maxlength) => {
  //Guardamos el trozo sobrante en una variable con substring
  let endNoWanted = str.substring(maxlength, str.length);
  //Si la palabra supera el largo indicado, reemplazamos ese trozo por nada y le concatenamos los puntos
  //Si no es así, simplemente devolvemos la cadena 
  return maxlength < str.length ? str.replace(endNoWanted, "") + "..." : str;
};

alert(truncate("Hola que tal, bocadillo vegetal", 10));
