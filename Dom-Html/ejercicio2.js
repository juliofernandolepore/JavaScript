/* modificando el DOM mas ejercicios de manipulacion de elementos,
 trabajando con selectores */

document.querySelector('.miClase');
/* selecciona el primer elemento que tiene esa clase (.nombreDeLaClase ) */

document.querySelectorAll('.miClase');
/* con esto selecciona todos los elementos que contengan la clase (.miClase) */

document.getElementsByClassName('miClase');
/* en este caso se busca la clase pero sin necesidad de poner punto, lo
cual nos devuelve un arreglo con todos los divs que tienen esa clase */

document.getElementById('caja1');
/* esto es para recuperar elementos con el selector ID A CONTINUACION LA SINTAXIS PARA HACERLO
CON EL METODO  document.querySelector();  */

document.querySelector('#caja2');
/* esto permite buscar los selectores ID utilizando el metodo querySelector */