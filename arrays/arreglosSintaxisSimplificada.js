/* declaracion de arreglos: en js los arreglos son OBJETOS,
sintaxis simplificada */
let nvoArreglo = [100, 200, 300, 400, 500, 600, 700];
/* en c se declaraban nvoArreglo [5] con la cantidad de elementos; o sea 
con el tamanio para luego introducir los valores, diferencia de js que 
no los define asi al inicio.
En el arreglo se puede almacenar distintos tipos de datos (flexible).
En este caso estoy sobreescribiendo algunos elementos del arreglo */
nvoArreglo[1] = 13;
nvoArreglo[2] = "cadena"
nvoArreglo[4] = 30;
console.log(`los valores del arreglo son ${nvoArreglo}`);
console.log(`el indice 0 tiene el valor de ${nvoArreglo[0]}`)