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
