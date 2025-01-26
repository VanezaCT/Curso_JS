// Copiar el código del ej54.md
// Refactorizar el código y utilizar operador ternario en lugar de if/else

let usuario = 'pepe2018'
let password = '12345'
let mensaje = (usuario == 'pepe201' && password == '12345') 
    ? console.log('El usuario está autenticado y puede ver el contenido del sitio')
    : console.log('Error, no se pudo autenticar al usuario, puede intentarlo más tarde')
