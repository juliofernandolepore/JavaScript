/*  POLIMORFISMO  - POO/OOP (PROGRMACION ORIENTADA A OBJETOS) */
class Padre {
    constructor(nombreArg,apellidoArg,edadArg,sueldoArg){
        this.nombre = nombreArg;
        this.apellido = apellidoArg;
        this.edad = edadArg;
        this.sueldo= sueldoArg;
    }
    infoDetalle(){
        return `Padre, 
        nombre:${this.nombre} ,
        apellido${this.apellido}, 
        edad ${this.edad}, 
        sueldo ${this.sueldo} `;
    }
}
class Hija extends Padre{
        constructor(nombreArg, apellidoArg, edadArg, sueldoArg, oficinaArg){
            super(nombreArg, apellidoArg,edadArg, sueldoArg);            
            this.oficina = oficinaArg;
        }        
        infoDetalle(){            
            return `Hija:${super.infoDetalle} departamento:${this.oficina}`
        };
}
let instanciaDeHija = new Hija("ana","lopez", 25, 100000,"administracion");
let instanciaDePadre= new Padre("juan", "herrera", 45, 80000);

/* A TRAVES DE UNA FUNCION LE PASO POR ARGUMENTO 1 CLASE(O INSTANCIA) Y EN
EL CUERPO DE LA FUNCION EJECUTA EL METODO DE LA CLASE SOBRE ESE ARGUMENTO */

function imprimir(ingresaObjeto){
     console.log(ingresaObjeto.infoDetalle());
};
/* en los argumentos se le pasa una referencia que en este caso es una instancia y 
a esta se le aplica otro metodo dentro de la funcion */
imprimir(instanciaDeHija);
imprimir(instanciaDePadre);

