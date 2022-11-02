/* MANEJO DE FUNCIONES FLECHA => (ARROW FUNCTIONS) */

/*  en javascript funciona el concepto de hoisting por el cual se puede llamar
a una funcion antes de haberla declarado */

/* estructura de la funcion clasica */
function miFuncion() {
    console.log("saludo desde la funcion");
}
miFuncion();

/* estructura de la funcion anonima (sin nomnbre), es decir se declara una variable
la cual se le asigna el valor de una function que solo tiene la palabra reservada
pero sin nombre.  */

let miFuncion2 = function () {
    console.log("saludo desde funcion anonima miFuncion2");
}
/*  A LAS FUNCIONES FLECHA NO SE LAS PUEDE LLAMAR O INVOCAR ANTES DE HABERLAS DECLARADO,
LA FUNCION FLECHA SE DECLARA Y LUEGO SE LLAMA, ya que la funcion se almaceno en una
variable LET, por lo que a esas variables no se les aplica el concepto de hoisting */

/* ahora a definir una funcion flecha con la estructura () => {} */

let miFuncion3 = () => {
    console.log("saludo desde mi funcion flecha");
}


/* estructura aun mas simplificada de funcion flecha */
let miFuncion4 = () => console.log("saludo desde mi funcion flecha");


/* estructura de la funcion flecha con return  */
let miFuncion5 = () => {
    return console.log("saludo desde funcion flecha 1 linea con return");
}


/* SINTAXIS PARA LA CREACION DE UN OBJETO(LITERAL) a traves de esta sintaxis de
funcion flecha , en la parte de bloque se usan parentesis(sustituyen llaves) y 
recien ahi dentro se crea al OBJETO {con llaves} */
const objeto1 = () => ({nombre:"juan", apellido: "lopez"});
/* aqui mando a consola el objeto y su atributo nombre */
console.log(objeto1());


/* estructura funcion flecha con unico parametro (simplificada) */
let funcion8 = parametroUnico => console.log(parametroUnico);
funcion8("saludo desde funcion6 flecha con parametros");


/* estructura funcion flecha con parametro */
let funcion6 = (argMensaje) => console.log(argMensaje);
funcion6("saludo desde funcion6 flecha con parametros");


/* estructura ordinaria de la funcion */
let funcion7 = function (argMensaje) {
    console.log(argMensaje);
}
funcion7("saludo desde funcion7 flecha con parametros");


/* funcion flecha con varios parametros */
const funcion9 = (num1 , num2) => num1 + num2;
console.log(funcion9(3,8));


/* funcion con varios parametros, en cuerpo con mas lineas */
const funcion10 = (num1 , num2) => {
    let resultado= num1 + num2;
    return `el resultado es: ${resultado}`;
}
console.log(funcion10(8,8));