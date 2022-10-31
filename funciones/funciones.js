/* funciones en javascript, las funciones en js tambien son OBJETOS */
//funcion sumar
//se declara la funcion
function sumar(a,b){
    let resultado = a+b
    return resultado
}
//ahora se define una variable que almacenara la funcion suma.
//y se invoca o llama a la funcion.
let num1 = 10, num2 = 20
operacion = sumar(num1,num2)
console.log(`el resultado de sumar ${num1} y ${num2} es = ${operacion}`)
/* En js se manejan paso por valor, ya que el paso por referencia lo hacen los
OBJETOS de forma indirecta, a diferencia de C que si tiene paso por referencia */