"use strict";

alert((6.35).toFixed(1));

/*El resultado es 6.3. Si probamos a sacar más decimales de los que JavaScript permite trabajar con precisión
veremos que el resultado es ligeramente menor a 6.4. Es por esto que que el resultado es redondeado a 6.3
En el caso del 1.35, el resultado si es ligeramente mayor, por lo que sube a 1.4
La manera correcta de redondear 6.35 sería la siguiente: */

alert(Math.round(6.35 * 10) / 10);

//Resulta que trabajar con 63.5 no ocasiona pérdida de precisión, por lo que el redondeo será perfecto