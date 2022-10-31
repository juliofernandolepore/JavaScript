//sumando en ciclo while, haciendo uso de suma acumulativa
let acumulador = 0, maximo= 10, iterador = 0;

while(iterador <= maximo ){
    //se ira sumando a medida que pasan las iteraciones en acumulador
    acumulador += iterador; //operador compuesto
    console.log(`la suma acumulativa es ${acumulador}`);
    //el incremento viene al final del ciclo
    iterador++;
}
console.log(`el valor del acumulador es ${acumulador}`)