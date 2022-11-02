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