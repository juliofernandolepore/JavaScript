//Funciones Recursivas: son aquellas que se llaman a si mismas
function recursiva(numero) {
    //caso base
    if (numero == 1)
        console.log(`felicitaciones se cumplio el if ${numero}`)
    else {
        //caso recursivo
        recursiva(numero - 1)
        console.log(`aun no se cumplio la condicion valida ${numero}`)
    }
}
//en este caso se va a seguir llamando a si misma hasta el valor de 1
recursiva(6)
//va a ir restando -1 hasta llegar a 1 (6-1 y asi x cada recursividad)