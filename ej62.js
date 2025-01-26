// Escribir un programa donde se ingresa un número que representa el mes y se obtiene como salida un mensaje
//  con el nombre del mes y la cantidad de días que tiene
// Declarar la variable numeroDeMes y asignar un valor entre 1 y 12
let numeroDeMes = "5";
// Declarar la variable nombreDelMes y asignar un valor null
let nombreDelMes = null;
// Declarar la variable cantidadDeDias y asignar un valor null
let cantidadDeDias = null;
// Según el número del mes Entonces
switch (numeroDeMes) {
    case "1":
        nombreDelMes = 'enero';
        cantidadDeDias = '31';
        mensaje = `El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`
        break;
    case "2":
        nombreDelMes = 'febrero';
        cantidadDeDias = '28';
        mensaje = `El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`
        break;
    case "3":
        nombreDelMes = 'marzo';
        cantidadDeDias = '31';
        mensaje = `El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`
        break;
    case "4":
        nombreDelMes = 'abril';
        cantidadDeDias = '30';
        mensaje = `El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`
        break;
    case "5":
        nombreDelMes = 'mayo';
        cantidadDeDias = '31';
        mensaje = `El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`

        break;
    case "6":
        nombreDelMes = 'junio';
        cantidadDeDias = '30';
        mensaje = `El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`

        break;
    case "7":
        nombreDelMes = 'julio';
        cantidadDeDias = '31';
        mensaje = `El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`

        break;
    case "8":
        nombreDelMes = 'agosto';
        cantidadDeDias = '31';
        mensaje = `El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`

        break;
    case "9":
        nombreDelMes = 'setiembre';
        cantidadDeDias = '30';
        mensaje = `El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`
        break;
    case "10":
        nombreDelMes = 'octubre';
        cantidadDeDias = '31';
        mensaje = `El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`
        break;
    case "11":
        nombreDelMes = 'noviembre';
        cantidadDeDias = '30';
        mensaje = `El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`
        break;
    case "12":
        nombreDelMes = 'diciembre';
        cantidadDeDias = '31';
        mensaje = `El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`
        break;
    default:
        mensaje = 'Ingrese un número entre 1 y 12';
}
console.log(mensaje)
// Asignar el nombre del mes correspondiente en la variable nombreDelMes
// Asignar la cantidad de días que le corresponend al mes seleccionado
// SINo
// Asignar null a las variables nombreDelMes y cantidadDeDias
// Si nombreDelMes Y cantidadDeDias son null Entonces
// Mostrar un mensaje de error: Ingrese un número entre 1 y 12
// SINO
// Mostrar el siguiente mensaje: El mes seleccionado es ${ nombreDelMes } y tiene ${ cantidadDeDias } de días
// Utilizar la siguiente lista de datos para resolver el ejercicio:
// 1. Enero 31 días
// 2. Febrero 28 / 29 días
// 3. Marzo 31 días
// 4. Abril 30 días
// 5. Mayo 31 días
// 6. Junio 30 días
// 7. Julio 31 días
// 8. Agosto 31 días
// 9. Septiembre 30 días
// 10. Octubre 31 días
// 11. Noviembre 30 días
// 12. Diciembre 31 díasc