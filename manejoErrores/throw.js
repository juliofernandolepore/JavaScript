/* otra forma de mostrar los errores a traves del metodo THROW por el cual yo le 
pongo el nombre o valor que tiene el error a secas */
"use strict"
/*  try {
    m = 30;
    throw "mi error";
} catch (error) {
    console.log(`variable con valor ${m} arroja (nombre que invente en throw)${error}`);    
}    */

let resultado = -10;

try {    
    if(isNaN(resultado))throw "no es un numero";
    else if(resultado === "")throw "cadena vacia";
    else if(resultado <= 0 )throw "es un valor 0 o negativo";

} catch (error) {
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}