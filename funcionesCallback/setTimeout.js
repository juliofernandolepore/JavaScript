/* PROCESOS ASINCRONOS: ejecucion de varios procesos por separado, combinado con
funciones callBack. Llamadas asincronas con uso setTimeout, los procesos asincronos 
permiten la ejecucion de procesos en simultaneo */
function callBack(){
    console.log("saludo asincrono despues de 10 segundos");
}
/* primer PARAMETRO O ARGUMENTO "FUNCION CALLBACK" , segundo ARGUMENTO el tiempo 
que debe transcurrir para que se ejecute. */
setTimeout(callBack , 10000);
/* setTimeout es una funcion(metodo de js, nosotros solo pasamor los argumentos, el
    segundo argumento es el tiempo y se expresa en milisegundos) */

/* OTRA SINTAXIS O ESTRUCTURA DE funcion como parametro dentro de setTimeout */ 
setTimeout(function(){console.log("esta es una funcion anonima, segundo saludo asincrono a los 3 segundos")
},3000);

/* SINTAXIS funcion FLECHA como parametro dentro de setTimeout */ 
setTimeout(() => console.log("funcion flecha, saludo asincrono a 1 segundos"), 3000);


