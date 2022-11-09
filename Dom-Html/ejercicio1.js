/* MANIPULACION DEL DOM */

document.querySelector('html');
/* este metodo se utiliza para recuperar algun elemento html, en este caso trae 
todos los elementos */

document.querySelector('div');
/* en este caso busca el elemento div, solo el PRIMERO que encuentra */

document.querySelectorAll('div');
/* no trae o recupera todos los elementos del mismo tipo */

document.querySelector('html').lang = "es";
/* en este caso se modifica el atributo idioma del html */

document.querySelector('title').innerText('manejando el dom');
/* busca la etiqueta o tag tittle y le cambia el valor texto por el nuevo atributo. */

document.querySelector('body').innerHTML= '<h1>hola<h1/>';
/* esto toma la etiqueta body y le introduce una etiqueta h1 dentro de sus
atributos */


