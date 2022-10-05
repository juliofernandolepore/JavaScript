//una manera de crear arreglos en js es la siguiente
let nvoArreglo2 = new Array();
//no olvidar que en js son OBJETOS.
let nvoArreglo3 = new Array(1,30,50,50,100)
console.log(`este es el contenido del arreglo ${nvoArreglo2}`);
console.log(`este es el contenido del arreglo ${nvoArreglo3}`);

/* En cambio con la siguiente sintaxis solo determina la cantidad de elementos
que contiene el arreglo, reservando espacios en memoria con valores undefined */
let nvoArreglo4 = new Array(6);
console.log(`este es el contenido del arreglo ${nvoArreglo4}`);