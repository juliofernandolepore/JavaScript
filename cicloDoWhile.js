//ejercicio ciclo do while para encontrar numeros pares 
let repeticiones= 30, iterador = 0;

do{ //se ejecuta al mes 1 vez si o si
    if (iterador % 2 == 0){
        console.log(`iterador par con valor ${iterador}`)
    }    
    iterador++
    
}while(iterador < repeticiones)