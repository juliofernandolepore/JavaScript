/* manejo de formularios aplicando los metodos del DOM */

var funcion1 = ()=> {
    let form1 = document.forms["formulario"];
    let texto = " ";
    for (let i of form1){
        texto += i.value + "   ";
        /* value para acceder a los value, o se a nombre y apellido en este caso */
        document.getElementById('valores').innerHTML = texto;
    }
}
/* a la funcion declaro una variable local a la cual le almaceno el metodo forms 
y le paso el id formulario, el formulario que estoy recuperando es un arreglo al
cual voy a tener que recorrer los elementos */

/* DOCUMENT WRITE  */
/* este metodo sobreescribe todo lo que se haya cargado previamente en el html, borrando
y reemplazando por el argumento de document.write  */

var mostrar =() => document.write("adios");

/* modificar elementos o cambio de contenido en el DOM HTML, a continuacion defino una
funcion con el metodo que recoge el id manipula el texto y le asigna un nuevo contenido. */

function mostrarH1 () {
     return document
     .getElementById("titulo")
     .innerHTML= "este es un h1 modificado";
}
/* aprendiendo a manejar sintaxis de tradicional a flecha, y con el operadort +=
se le adiciona mas contenido sin borrar el anterior como el caso siguiente. */

 var mostrarH2 = () => document
 .getElementById("titulo2")
 .innerHTML += "<br/>he sido agregado con una funcion flecha";


 /* cambio de colores con javascript sin utilizar un archivo css */

 var cambioColor = () => document.getElementById("titulo2").style.color ="blue";