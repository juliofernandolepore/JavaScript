// alcance de las variables
//variables globales
let variableGlobal = 5
var a = 80
//imprimir y cambiar valor de la variable global
variableGlobal = 10
console.log(variableGlobal)
//definicion de la Funcion
function testeo(variableLocal){
    console.log(variableLocal)
    //ahora a definir una variable local
    let interna = 100
    console.log(interna)
}
testeo(variableGlobal)