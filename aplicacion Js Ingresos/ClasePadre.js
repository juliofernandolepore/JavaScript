/* definicion de clases o templates, a continuacion voy a definir la clase padre
de la cual voy a heredar ala clase hijo  */
/* (las clases de nombran en mayuscula) */

class DatoPadre {
    /* a partir del metodo o funcion constructor permite que al instanciar o crear objetos
    a partir de la clase padre (no confundir con herencia de propiedades), el objeto
    hijo o instanciado contendra las mismas propiedades que el padre, hasta que se le
    pasen los argumentos en el momento de construir dichos objetos (instancias) */
    constructor(argDescripcion , argValor){
    this.propDescripcion = argDescripcion;
    this.propValor = argValor;
    }
    /* METODOS DE LA PROPIEDAD "propDescripcion" */
    get descripcion(){
        return this.propDescripcion;        
    }
    set descripcion(argDescripcion){
        this.propDescripcion = argDescripcion;
    }
    /* METODOS DE LA PROPIEDAD "propValor" */
    get valor(){
        return this.propValor;
    }
    set valor(argValor){
        this.propValor = argValor;
    }
}
/*      AHORA A DEFINIR LAS CLASES HIJAS con IDENTIFICADORES UNICOS      */


