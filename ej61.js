// Escribir un programa donde se ingresa un número entre 1 y 7 que representa un día de la semana 
// y se obtiene un mensaje como salida.En caso de ingresar un número que no sea válido mostrar un mensaje de error
const numero = '2';
let mensaje = null;

switch (numero) {
    case "1":
        mensaje = "el 1 representa al lunes";
        break;
    case "2":
        mensaje = "el 2 representa al martes";
        break;
    case "3":
        mensaje = "el 3 representa al miercoles";
        break;
    case "4":
        mensaje = "el 4 representa al jueves";
        break;
    case "5":
        mensaje = "el 5 representa al viernes";
        break;
    case "6":
        mensaje = "el 6 representa al sabado";
        break;
    default:
        mensaje = "el 7 representa al domingo";
}

console.log(mensaje);
// Declarar la variable dia y asignar un número del 1 al 7

// Declarar la variable nombreDelDia y asignar un valor nul