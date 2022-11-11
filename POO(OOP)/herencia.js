/* herencia en javascript (oop) */

class Humano {
    constructor(nombre,edad){
        this.nombre,
        this.edad
    }
    mostrar(){
        console.log(`el nombre es ${this.nombre} y la edad es: ${this.edad}`)
    }
}

/* ahora aplicar la herencia hacia otra clase (template o plantilla), a traves del metodo
extends */

class Empleados extends Humano{
    sueldo;
    constructor(nombre, edad, argSueldo){
        /* necesito usar SUPER para acceder al constructor de la clase de la cual
        hereda atributos y metodos, SUPER solo permite que se herede el contructor padre */
        super(nombre, edad)
        this.nombre = nombre;
        this.edad = edad; 
        this.sueldo = argSueldo;
    }
    /* modificar el metodo heredado para agregar nuevo atributo del hijo */
    mostrar(){
        super.mostrar()
        console.log(`sueldo: ${this.sueldo}`);
    }
}

const empleado1 = new Empleados("fernando", 39, 200000);
console.log(empleado1);
console.log(empleado1.sueldo);
empleado1.mostrar();