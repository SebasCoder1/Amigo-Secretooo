alert('¡Hola! Bienvenido al juego de Amigo Secreto');

let jugador1 = prompt('Jugador 1, ingresa tu nombre:');
let jugador2 = prompt('Jugador 2, ingresa tu nombre:');
let jugador3 = prompt('Jugador 3, ingresa tu nombre:');
let jugador4 = prompt('Jugador 4, ingresa tu nombre:');


let amigo1 = Math.floor(Math.random() * 4) + 1;
while (amigo1 === 1) {
    amigo1 = Math.floor(Math.random() * 4) + 1;
}

let amigo2 = Math.floor(Math.random() * 4) + 1;
while (amigo2 === 2 || amigo2 === amigo1) {
    amigo2 = Math.floor(Math.random() * 4) + 1;
}

let amigo3 = Math.floor(Math.random() * 4) + 1;
while (amigo3 === 3 || amigo3 === amigo1 || amigo3 === amigo2) {
    amigo3 = Math.floor(Math.random() * 4) + 1;
}

let amigo4 = Math.floor(Math.random() * 4) + 1;
while (amigo4 === 4 || amigo4 === amigo1 || amigo4 === amigo2 || amigo4 === amigo3) {
    amigo4 = Math.floor(Math.random() * 4) + 1;
}

// Mostrar los resultados
alert(`${jugador1}, tu amigo secreto es: ${eval('jugador' + amigo1)}`);
alert(`${jugador2}, tu amigo secreto es: ${eval('jugador' + amigo2)}`);
alert(`${jugador3}, tu amigo secreto es: ${eval('jugador' + amigo3)}`);
alert(`${jugador4}, tu amigo secreto es: ${eval('jugador' + amigo4)}`);

