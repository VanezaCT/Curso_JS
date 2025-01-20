// Declarar una variable texto con el siguiente valor: game of thrones
var texto='game of thrones';
// Declarar 3 variables en una línea con los siguientes nombres:
// primerLetra
// segundaLetra
// tercerLetra
var primerLetra, segundaLetra, tercerLetra;
// Asignar a la variable primerLetra el primer caracter del contenido de la variable texto
primerLetra = texto.charAt(0);
// Asignar a la variable segundaLetra el caracter número 5 del contenido de la variable texto
segundaLetra = texto.charAt(5);
// Asignar a la variable tercerLetra el caracter número 8 del contenido de la variable texto
tercerLetra = texto.charAt(8)
// Declarar una variable resultado con el valor de concatenar las variables primerLetra, segundaLetra y tercerLetra
var resultado = primerLetra.concat(segundaLetra,tercerLetra);
// Mostrar en consola el contenido de la variable resultado en mayúscula
console.log(resultado.toUpperCase());
// Deberías ver GOT como resultado

