/* DOCUMENT OBJECT MODEL (manipulacion del DOM HTML con Js), en Js el html es tratado como
un object de javascript, cada uno de los elementos del HTML(h1,h2,p, div, etc) es un 
"objeto" (tienen atributos y metodos) por lo tanto se pueden recibir y manipular desde Js */
let tituloH1 = document.getElementById("h1Unico");
/* para acceder al DOM se usa el Objejt DOCUMENT y el metodo para recuperar id,
en este caso el metodo: getElementById() y almacenados el valor de ese ID en una
variable. */
/* Con el metodo(propiedad) "innerHTML" accedemos al texto de ese elemento html
(inner significa interno, que hace referencia al contenino del elemento por ID) */
console.log(`el valor de este id h1 es ${tituloH1}`);
/* ahora recupero el valor del id del primer parrafo */
let unH2 = document.getElementById("p1").innerHTML;
console.log(`este es el contenido del id p1 ${unH2}`);
/* si expreso el metodo sin agregarle al final innerHTML, lo que va a contener no es
el texto sino TODO EL CONTENIDO del elemento ID */
console.log(`el valor es: ${tituloH1.innerHTML}`);
/* es otra forma de acceder al elemento texto, ya que es un objeto de html, son
las 2 maneras de realizar el almacenamiento del texto y luego mostrarlo */

/* MODIFICACION DEL CONTENIDO (DOM) DOCUMENT OBJECT MODEL CON JAVASCRIPT */

/* IMPORTANTE: el arhivo javascript debe ser introducido mediante la etiqueta script 
al final del body sino esto dara lugar a error, ya que se cargan primero los elementos 
del html y luego se ejecuta el script */

unH2.innerText = "h2 modificado";
tituloH1.innerText = "cambio de H1";
/* con el metodo innerText me permite cambiar el texto contenido en el ID almacenado
en la variable */

/* metodo: obtener elemento por etiqueta (getElementByTagName), POR LO QUE LAS 
ETIQUETAS EN EL HTML TENGAN O NO ID (IDENTIFICADOR) NO ES RELEVANTE PARA ESTE METODO */
let todosLosParrafos = document.getElementsByTagName("p");

console.log(`numero de parrafos: ${todosLosParrafos[1]}`);
console.log(`numero de parrafos: ${todosLosParrafos.lenght}`);
/* cuando creo la variable que almaceno todos los tag, es un arreglo de etiquetas
por lo que necesito iterar ese arreglo con el ciclo FOR. */

for(let iterador = 0; iterador < todosLosParrafos.length; iterador++){
    console.log(`indice: ${iterador} el contenido es: ${todosLosParrafos[iterador].innerText}`);
}
/* necesariamente .innertext para que me muestre la propiedad de texto de cada
elemento que recorro del arreglo de parrafos */
