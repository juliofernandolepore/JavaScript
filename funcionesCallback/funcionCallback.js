/* CREACION DE FUNCIONES CALLBACK: son aquellas funciones que se pasan como 
argumento dentro de otras funciones; LAS FUNCIONES TAMBIEN SON OBJETOS EN 
JAVASCRIPT */

/* funcion de tipo callback, esta llamara a otra funcion */

function imprimir(argMensaje){
    console.log(argMensaje);
}

function sumar( num1, num2, funcionCallback){
    result = num1 + num2;
    funcionCallback(`"el resultado es ${result}`);
}
/* llamo a la funcion principal y en sus argumentos le paso la funcion callback,
que no hay que confundir ya que el argumento destinado a la funcion callback puede
llamarse distinto a la funcion invocada (callback) */
sumar(200, 300, imprimir);



/* AHORA CREANDO FUNCIONES FLECHA COMBINANDO CALLBACK */

var flecha1 = (argMensaje) => console.log(argMensaje);
var sumar2 =(n1, n2, funcion) => {
    res = n1 + n2;
    flecha1(`tu resultado de sumar ${n1} y ${n2} es: ${res}`)
}

/* no hay que olvidar que la funcion flecha almacenada en var en lugar de let
permite la aplicacion de contexto o el hoisting, es una excepcion a la regla. */
sumar2(5,10, flecha1);