/* el uso strict tiende al uso de buenas practicas */
"use strict" /* este es el modo estricto: por lo cual no podemos usar variables
sin antes haberlas declarado */

let x = 20;
console.log(x);
/* ejemplo de variable no declarada o definida  */
y = 10;
console.log(y);

t = 60;
function miFuncion(){
    "use strict"
    /* dentro de una funcion tambien se puede declarar el modo estricto */
    t=15;
    console.log(t);
}