/* programacion orientada a objetos (encapsulamiento) */

//PROPIEDADES PRIVADAS (sin acceso desde el exterior de la clase)

class Vehiculo{
    /* aqui se definiran las propiedades PRIVADAS con # */
    #serie
    constructor(serie,modelo,fecha,marca){
    this.#serie = serie;
    this.modelo = modelo;
    this.fecha = fecha;
    this.marca = marca;
}
    set setSerie(serie){
        this.#serie = serie;
    }
    get getSerie(){
        return this.#serie;
    }
}

const auto1 = new Vehiculo(1000002658, 2019, 2022, "fiat");
console.log(auto1.marca);
auto1.setSerie = 50001255;
console.log(auto1.getSerie);
/* en este ultimo console.log no me muestra el numero de serie si no lo estoy solicitando
a traves del metodo get, ya que esta como PRIVADO */
console.log(auto1);