/* POO u OOP (PROGRMACION ORIENTADA A OBJETOS) - herencia - instancias - Sobreescritura */
/* ORDEN DEL EJERCICIO:
class Padre
class Hija1
instanciaDeHija   */
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

/* ahora con EXTEND hereda los atributo de la clase Padre */
class Hija extends Padre{
        constructor(nombreArg, apellidoArg, edadArg, sueldoArg, oficinaArg){
            super(nombreArg, apellidoArg,edadArg, sueldoArg);
            /* super es para poder usar el constructor de la clase padre y solo se 
            pasan los argumentos de la clase padre */
            this.oficina = oficinaArg;
        }
        /* SOBRESCRITURA DEL METODO(se debe usar el mismo nombre del metodo) 
        DEL PADRE DENTRO DE LA CLASE HIJA*/
        infoDetalle(){
            /* aca es OPCIONAL, pero si uso el llamado a los demas atributos del
            metodo de padre necesito agregar SUPER */
            return `Hija:${super.infoDetalle} departamento:${this.oficina}`
        };
}

/* CREAMOS UN OBJETO O INSTANCIA DE LA CLASE HIJA */

 let instanciaDeHija = new Hija("ana", "lopez", 25, 100000, "administracion" );

/* ahora voy a utiliza un metodo "infoDetalle "de la clase Padre para ver que me 
muestra de la clase hija, es decir aplicando el metodo de la clase padre solo me 
muestra los atributos de la instancia u objeto pero no me muestra el ultimo atributo 
creado en la clase hija */
instanciaDeHija.infoDetalle();
console.log(instanciaDeHija);
let instanciaDePadre= new Padre("juan", "herrera", 45, 80000);
instanciaDePadre.infoDetalle();
console.log(instanciaDePadre);