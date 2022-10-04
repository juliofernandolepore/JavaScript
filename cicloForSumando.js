//sumando en ciclo for, haciendo uso de suma acumulativa
let acumulador = 0, maximo= 10;

for(iterador = 0; iterador <= maximo; iterador++){
    //se ira sumando a medida que pasan las iteraciones en acumulador
    acumulador += iterador; //operador compuesto
    console.log(`la suma acumulativa es ${acumulador}`);
}
console.log(`el valor del acumulador es ${acumulador}`)