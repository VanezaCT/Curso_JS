// Declarar la variable usuarioYPassword y asignarle el siguiente texto: 'pepito2017,12345'
const usuarioYPassword = 'pepito2017,12345'; 
// Declarar la variable nombreDeUsuario y utilizar el método substr para obtener el nombre de usuario(pepito2017)
const nombreDeUsuario = usuarioYPassword.substring(0,10);
// Declarar la variable password y utilizar el método substr para obtener el password(12345)
const password = usuarioYPassword.substring(11,16);
// Mostrar en consola el siguiente mensaje: El usuario ${ nombreDeUsuario } tiene ${ password } como password
console.log(`el usuario ${ nombreDeUsuario } tiene ${ password } como password`);