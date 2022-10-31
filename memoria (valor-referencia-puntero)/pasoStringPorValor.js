//paso por valor de un string en javascript, las cadenas son un tipo primitivo
function cambiarValor(parametro){
    parametro = "saludo"
}
//variable global (argumento)
let argumento = "saludo despedida"
console.log(`valor de la variable array/objeto anterior al llamado ${argumento}`)
//llamado a la funcion con paso del argumento(variable)
cambiarValor(argumento)
console.log(`este es el valor despues de llamar a la funcion ${argumento}`)
//como el string es un tipo primitivo se le pasa una copia del valor a la funcion