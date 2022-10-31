//paso por valor en javascript
function cambiarValor(parametro){
    parametro = [20]
}
//llamar a la funcion
let argumento = [10,20,30]
console.log(`valor de la variable array/objeto anterior al llamado ${argumento}`)
cambiarValor(argumento)
console.log(`este es el valor despues de llamar a la funcion ${argumento[0]}`)