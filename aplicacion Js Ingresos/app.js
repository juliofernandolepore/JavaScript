/* ACLARACION COMO NO ME TOMABA LOS IMPORTS DE LAS CLASES SEPARADAS EN CADA ARCHIVO
JAVASCRIPT DEJE TODO EL CODIGO EN UN ARCHIVO PRINCIPAL */

/* definicion de clases o templates, a continuacion voy a definir la clase 
padre de la cual voy a heredar ala clase hijo (las clases de nombran en mayuscula) */

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

class Ingreso extends DatoPadre {
    /* con la palabra reservada "extend": significa que a esta clase hija que 
    estoy creando va a recibir las propiedades de la clase padre, nuevamente no confundir
    herencia con instancias o creacion de objetos (a traves de metodos constructores). */
    static objetoNumero = 0;
    /* el atributo o propiedad static nos sirve como identificador cuando se
    vaya a contruir instancias u objetos */
    constructor(argDescripcion, argValor){
        super(argDescripcion, argValor);
        /* el metodo super nos permite hacer uso directo de las propiedades del padre */
        this.identificador = ++Ingreso.objetoNumero;
        /* esto significa que cada vez que yo vaya a crear(instanciar) un objeto de esta
        clase hija la propiedad objeto se va a incrementar en 1, para esto hay que ver
        operaciones de incremento o pre-incremento. */        
    }
    /* ahora FUERA DEL CONTRUCTOR defino los metodo de esta clase hija get(obtener) y 
    set (modificar una propiedad o atributo) */
    /* METODO DEL ATRIBUTO objetoNumero get */
    get id(){
        /* aca no se hay que crear un metodo set porque no podemos modificar el
        id de identificador, del atributo estatico objetoNumero */
        return this.identificador;
    }    
    /* los METODOS get y set de los ATRIBUTOS descripcion y valor seran heredados
    de la clase padre */    
    }
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

/* AHORA A DEFINIR ARREGLOS  */

const ingresos = [
    /* DENTRO DEL ARREGLO (array) creo un objeto o instancia de la clase
    hija Ingreso y le paso los argumentos correspondientes de salario (descripcion)
    y 90000 (valor) */
    new Ingreso("sueldo1",600),
    new Ingreso("salario", 60000),
]

const egresos =[
    new Egreso("gasto", 50000),
    new Egreso("gasto", 4000),
]

/* ahora defino una funcion para cargar en el html(a traves del evento onload) */
let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
};
/* ahora a definir una variable que almacenara el total de los ingresos por medio
 de una arrow function o funcion flecha */

let totalIngresos = () => {
    let total = 0;
    for(let v of ingresos){
        total +=v.valor;        
    };
    return total;
};

let totalEgresos = () => {
    let totalE = 0;
    for(let v of ingresos){
        totalE +=v.valor;        
    };
    return totalE;
};

let cargarCabecero = () => {
    let presupuesto = totalEgresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentajeEgreso').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

    const formatoMoneda = (variableConvertir) => {
        return variableConvertir.toLocaleString('en-US', {style: "currency", currency: "USD", minimumFractionDigits: 2 })
    }
    const formatoPorcentaje = (aPorcentaje) => {
        return aPorcentaje.toLocaleString('en-US', {style: "percent", minimumFractionDigits: 2 });

    }

    const cargarIngresos = () => {
        let HTML = "";
        /* recupera 1 arreglo por interacion (descripcion) y
        (valor) de los arreglos en la constante ingresos */
        for(let ingreso of ingresos){
            /* suma acumulativa(suma en asignacion) */
            HTML += crearIngresoHTML(ingreso);
            /* ingreso es el arreglo con los valores */
        }
        /* no confundir getElementById con otro medoto, estuve media
        hora renegando porque no funcionada el js  */
        document.getElementById('resultado').innerHTML = HTML;
    };
    const crearIngresoHTML = (ingreso)=>{
        let HTML = `
        <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.propDescripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">+ ${formatoMoneda(ingreso.propValor)}</div>
            <div class="elemento_eliminar">
                <button class='elemento_eliminar--btn'>
                    <ion-icon name="close-circle-outline"
                    onclick="eliminarIngreso(${ingreso.atributoId})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
        `;
        return HTML;
    }
    /* const crearIngresoHTML = (ingreso) => {
         let HTML = `         
         <p>${ingreso.propDescripcion}</p>         
        <p>${formatoMoneda(ingreso.propValor)}</p>            
         `;
         return HTML;
    } */

    const eliminarIngreso = (atributoId) => {
        let indiceEliminar = ingresos.findIndex(ingreso => ingreso.atributoId === atributoId);
        ingresos.splice(indiceEliminar, 1);
        cargarCabecero();
        cargarIngresos();
    }

    let agregarDato = () => {
        let formulario = document.forms['forma'];
        /* esto recolecta el formulario del html en esta variable y voy
        desmenuzando cada dato que requiero en una variable aparte, o sea
        recuperando cada uno de esos elementos input del html */
        let tipo = formulario['tipo'];
        let descripcion  = formulario['descripcion'];
        let valor = formulario ['valor'];
        if(descripcion.value !== '' && valor.value !== ''){
            /* el valor ingreso o egreso corresponde al nombre de las clases
            o plantillas creadas anteriormente en las constantes como arreglos */
            if(tipo.value ==='ingreso'){
                /* egresos es el arreglo, push es un metodo de arreglos */
                ingresos.push(new Ingreso(descripcion.value , Number(valor.value)));
                cargarCabecero();
                cargarIngresos();
            }
            else if (tipo.value === 'egreso'){
                /* egresos es el arreglo, push es un metodo de arreglos */
                egresos.push(new Ingreso(descripcion.value , Number(valor.value)));
                cargarCabecero();
                cargarIngresos();
            }
        }        
    };