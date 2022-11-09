/* MANIPULACION DEL DOM a traves de variables retocando atributos */

let q1 = document.querySelector('#caja1');
/* en este caso tomo el id de ese div y procedere a modificar sus atributos  */

let nvoBotom = document.createElement('button');
/* con esto estoy creando un elemento button (tag button) y queda almacenado en una
variable */

q1.append(nvoBotom);
/* con esto le agrego un atributo al ID caja1 le agrega un boton, recordar que append es
un metodo de js para agregar elementos al objeto que le pase el metodo y el argumento es
el atributo (variable) nuevo */

nvoBotom.innerText('soy un nuevo boton');
/* ahor a la variable usada para crear button le modifico propiedades */

nvoBotom.classList.add('miClase2');
/* con este metodo le agrego una CLASE a la variable boton (tag button) */