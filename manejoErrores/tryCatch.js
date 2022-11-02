/* MANEJO DE ERRORES(excepciones) EN MODO ESTRICTO */

"use strict"

/* ahora para que el codigo se ejecute a pesar del error , debemos encerrar
la expresion o sentencia dentro de un bloque TRY */
try {
    x = 20;
} catch (error) {
    /* en este bloque se atrapa el error en la variable error(argumento) y se muestra
    a traves del bloque con el metodo de consola */
    console.log(error); 
    console.log("falta declarar la variable correctamente");    
}

/* con esto evitamos que el programa finalice de forma abrupta y por lo tanto se
puedan ejecutarse las linea de codigo posteriores. */

console.log("linea de codigo siguiente");

try {
    miFuncion();
} catch (error) {
    console.log(`el error ${error}, corresponde a una funcion que se llamo pero
    que nunca fue declartada`);
}

console.log("ejecucion de otras lineas de codigo posteriores");


/* ahora el metodo tryCatch finally */
try {
    let varValida = 100;
    // y = 50;
} catch (error) {
    console.log(`se capturo el ${error} en el bloque catch`);    
}
finally{
    /* exista o no error, ests bloque siempre se ejecutara */
    console.log("finalizo la revision de errores del metodo tryCatch");
}
