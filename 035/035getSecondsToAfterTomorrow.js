"use strict";

let getSecondsToAfterTomorrow = () =>{
    //Debemos  crear nuestra fecha local y extraerle las horas, minutos y segundos
    let fechaActual = new Date();
    let horas = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();
    //Aquí calculamos los segundos totales transcurridos
    let segundosTotalesHoy = (horas * 60 + minutos) * 60 + segundos;
    //Retornamos los segundos que tiene un día menos los segundos totales transcurridos
    //Le sumamos los segundos de un día para devolver los segundos restantes hasta el día después de mañana
    return (86400 - segundosTotalesHoy) + 86400;
}

alert(getSecondsToAfterTomorrow() )