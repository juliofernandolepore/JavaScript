/* procesos ASINCRONOS, por lo que permite la ejecucion de procesos en simultaneo */
/* Es otra funcion(metodo) de Js, recibe como argumento una funcion callback,
el setInterval manda a llamar a una funcion cada cierto tiempo */

let reloj = () => {
    /* funcion flecha, creacion de un objeto date, luego interpolacion string */
    let fecha = new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds}`);
};
/* ahora llamo al metodo setInterval, le paso la funcion RELOJ y lo ejecuto cada 1 segundo
(1000ms) */
setInterval(reloj, 1000);