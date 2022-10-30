class Egreso extends DatoPadre {
    /* con la palabra reservada "extend": significa que a esta clase hija que 
    estoy creando va a recibir las propiedades de la clase padre, nuevamente no confundir
    herencia con instancias o creacion de objetos (a traves de metodos constructores). */
    static conteo = 0;
    /* el atributo o propiedad static nos sirve como identificador cuando se
    vaya a contruir instancias u objetos */
    constructor(argDescripcion, argValor){
        super(argDescripcion, argValor);
        /* el metodo super nos permite hacer uso directo 
        de las propiedades del padre */
        this.atributoId = ++Egreso.conteo;
        /* esto significa que cada vez que yo vaya a crear(instanciar) un objeto de 
        esta clase hija la propiedad objeto se va a incrementar en 1, para esto hay 
        que ver operaciones de incremento o pre-incremento. */        
    }
    /* ahora FUERA DEL CONTRUCTOR defino los metodo de esta clase hija get(obtener) y 
    set (modificar una propiedad o atributo) */
    /* METODO DEL ATRIBUTO identificador get */
    get identificador(){
        /* aca no se hay que crear un metodo set porque no podemos modificar el
        id de identificador, del atributo estatico conteo */
        return this.atributoId;
    }    
    /* los METODOS get y set de los ATRIBUTOS descripcion y valor seran heredados
    de la clase padre */  
    }