//suma acumulativa en el ciclo do while
let acumulador = 0, maximo = 10, iterador = 0;

do {
    //se ira sumando a medida que pasan las iteraciones en acumulador
    acumulador += iterador; //operador compuesto
    console.log(`la suma acumulativa es ${acumulador}`);
    //el incremento viene al final del ciclo
    iterador++;
} while (iterador <= maximo)

console.log(`el valor del acumulador es ${acumulador}`)