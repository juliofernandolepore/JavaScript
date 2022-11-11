/* ejercicios en el manejo de clases (oop) */

class Persona {
    nombre;
    apellido;
    edad;
    
    misDatos(){
        console.log(this.nombre,
                    this.apellido,
                    this.edad);
    }
}

/* ahora construir objetos a partir de la clase (instanciar objetos) */

const p1 = new Persona();
p1.nombre = "fernando";
p1.apellido = "lepore";
p1.edad = 39;
p1.misDatos();
console.log(p1);

/* ahora Creacion de una clase con Metodo o funcion constructor */

class Animal {   
    constructor(argNombre, argRaza, argPeso, argColor){
        this.nombre = argNombre;
        this.raza = argRaza;
        this.peso = argPeso;
        this.color = argColor;
    }
    detalle(){
        console.log(this.nombre,this.raza,this.peso,this.color);
    }
}

const gato1 = new Animal("michi", "california", 5, "tigre");
console.log(gato1);
console.log(gato1.nombre);
gato1.detalle();

const perro1 = new Animal("neguito", "coquer", 8, "negro");
perro1.detalle();