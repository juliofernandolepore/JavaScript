/* EVENTOS DEL DOM HTML CON JAVASCRIPT */

/* h1 o cualquier otra etiqueta son objetos para javascript, por lo que sus atributos y
propiedades son manipulables */

function cambiarTexto(argH1){
    console.log(argH1);
    console.log(argH1.innerHTML);    
    argH1.innerHTML = "TRABAJANDO CON FUNCIONES CON ARGUMENTO THIS"
}