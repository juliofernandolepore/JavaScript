//practicando con ciclo WHILE (loop o bucles)

let contador = 0, repeticion = 6;

//previamente se definio el contador y el limite de repeticiones en variable
while (contador < repeticion) {
    //la condicion es verdadera por lo que se repite 
    console.log(`
    contador en la iteracion ${contador}`)
    //si o si hay que incrementar la variables
    contador++
    //si no se le incorpora el incremento el bucle sera infinito
    //y ahora evaluamos la condicion durante las iteraciones
    let condicion = contador < repeticion
    console.log(`iteracion ${contador} la condicion es ${condicion}`)
}