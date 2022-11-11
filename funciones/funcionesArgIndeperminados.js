/* ARGUMENTOS INDETERMINADOS (FUNCIONES) */
/* trabajando con arreglos(for of) */

function sumar (...argumentos){
    let suma = 0;
    for (let i of argumentos){
        suma += i;
    }
    return suma;
}

const resultadoSuma = sumar(200,52,63,80,90,40);
console.log(`la suma resultante es: ${resultadoSuma}`);