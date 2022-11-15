let formatDate = (date) => {
//En primer lugar extraigo todos los valores que necesito de la fecha
  let dia = date.getDate();
  let mes = date.getMonth() + 1;
  let año = date.getFullYear();
  let horas = date.getHours();
  let minutos = date.getMinutes();
  //Despues obtengo la diferencia entre esa fecha y la actual y la paso a segundo, minutos y horas
  let diferenciaEnSegundos = Math.round((new Date() - date) / 1000);
  let diferenciaEnMinutos = diferenciaEnSegundos / 60;
  let diferenciaEnHoras = diferenciaEnMinutos / 60;

  //Mediante una serie de ifs comprobamos que las condiciones del ejercicio se cumplen y retornamos el resultado

  if (diferenciaEnSegundos < 1) {
    return "Ahora Mismo";
  } else if (diferenciaEnMinutos < 1) {
    return "Hace " + diferenciaEnSegundos + " segundos";
  } else if (diferenciaEnHoras < 1) {
    return "Hace " + diferenciaEnMinutos + " minutos";
  } else {
    return dia + "/" + mes + "/" + año + "   " + horas + " - " + minutos;
  }
};

//De esta forma podemos comparar difentes fechas para ver todos los resultados
alert(formatDate(new Date(new Date() - 1)));
//AHora mismo
alert(formatDate(new Date(new Date() - 30 * 1000)));
//Hace 30 segundos
alert(formatDate(new Date(new Date() - 5 * 60 * 1000)));
//Hace 5 min
alert(formatDate(new Date(new Date() - 86400 * 1000)));
//fecha de ayer
