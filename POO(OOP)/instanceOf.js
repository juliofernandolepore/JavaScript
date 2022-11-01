/*  metodo " instancef " - POO/OOP (PROGRMACION ORIENTADA A OBJETOS) */
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

/* uso metodo INSTANCEOF */

function tipodeObjeto(ingresaObjeto){
     console.log(ingresaObjeto.infoDetalle());
     if (ingresaObjeto instanceof Hija){
        console.log("es un objeto de tipo Hijo");
     }
     else if(ingresaObjeto instanceof Padre)
     {console.log("es un objeto de tipo Padre");
     }
     else if(ingresaObjeto instanceof Object){
        console.log("es un objeto de tipo Object");
     }
};
/* hay que recordar que la clase PADRE es una clase principal constructora 
y que no deriva de ninguna otra clase, no es una instancia. */
tipodeObjeto(instanciaDeHija);
tipodeObjeto(instanciaDePadre);
/* el tipo OBJECT es una clase padre de todas las clases, es la plantilla(template)
 constructora de javascript de la cual se utilizan metodos y atributos */

