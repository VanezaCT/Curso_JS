// Declarar la variable hora
let hora = 15;
// Establecer un valor entre 0 y 24
// Si la hora es menor que 12 y mayor que 5 entonces
// Mostrar el mensaje: Buen día
if (5 < hora < 12) {
    console.log('Buen dia');
}
// Si la hora es mayor o igual que 12 y menor que 20 entonces
// Mostrar el mensaje: Buenas tardes
else if (20 > hora >= 12) {
    console.log('buenas tardes');
}
// Si No:
// Mostrar el mensaje: Buenas noches
else {
    console.log('buenas noches');
}
// Cambiar el valor de la variable hora un par de veces y ejecutarlo para ver que pasa