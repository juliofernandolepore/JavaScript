/* creacion de objetos literales */

const persona = {
    nombre : "fernando",
    apellido : "lepore",
    altura : 183,
    peso : 90, 
    /* ahora a crear un metodo del objeto */
    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    },
    /* otro atributo (lista en array) */
    gustosHelados : ["menta","cereza","chocolate suizo", "durazno"],
    /* un objeto literal anidado (objeto dentro de objeto) */
    direccion : {
        pais : "Argentina",
        provincia : "Cordoba",
        celular : 351
    }
}
/* atributos o propiedades del objeto creado */

console.log(persona.gustosHelados);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.altura);
console.log(persona.peso);
console.log(persona.nombreCompleto());
console.log(persona.direccion.pais);





