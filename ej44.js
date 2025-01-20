// Declarar la variable texto y asignar el siguiente valor: HOLA
var texto='HOLA';
// Declarar la variable resultado y asignar el valor de la variable texto invirtiendo cada uno de los caracteres y concatenandolos
var resultado = texto.split('').reverse().join('');
//split convierte de texto a array
//reverse invierte el arreglo
//join Une los caracteres del arreglo invertido de nuevo en una cadena.
// Mostrar en consola el contenido de la variable resultado en minúscula
console.log(resultado.toLocaleLowerCase());
// Deberías ver como resultado la palabra aloh

