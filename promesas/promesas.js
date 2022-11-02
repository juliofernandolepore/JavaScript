/* PROMESAS: son OBJETOS de JS, que tienen 2 parametros(que son funciones de tipo 
CALLBACK) , utilizando funcion flecha. El primer parametro en el caso que se haya 
ejecutado existosamente y el segundo parametro si devuelve un error o fallo */

/* DECLARACION DE LA PROMESA */
let promesa1 = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
    resolver("resolvio correcto");
    else rechazar("se produjo un error");
});

/* el parentesis externo corresponde a la creacion del nuevo objeto promesa.
resolver: es el primer parametro(funcion callback).
rechazar: es el segundo parametro(funcion callback) */

// LLAMAR A LA PROMESA, recibe 2 PARAMETROS DE TIPO FLECHA
/*

promesa1.then(
    valor => console.log(valor),
    // este primero argumento es una funcion flecha (resuelve correcto)
    error => console.log(error)
    // este segundo argumento es una funcion flecha (se produce un error)
    );      
    
    */

/* otra sintaxis de PROMESAS en el momento de la llamada: */
promesa1
.then(valor => console.log(valor))
.catch(error => console.log(error));
