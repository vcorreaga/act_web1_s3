const prompt = require("prompt-sync")();

let numeroSecreto = Math.floor(Math.random() * 50) + 1;
let intento;
let intentosRestantes = 7;

while (intentosRestantes > 0) {
    intento = parseInt(prompt(`Adivina el número (1-50). Intentos restantes: ${intentosRestantes}: `));

    if (intento === numeroSecreto) {
        console.log("Correcto. Adivinaste el número.");
        break;
    } else if (Math.abs(intento - numeroSecreto) <= 3) {
        console.log("Cerca");
    } else if (intento > numeroSecreto) {
        console.log("Muy alto.");
    } else {
        console.log("Muy bajo.");
    }

    intentosRestantes--;
}

if (intentosRestantes === 0) {
    console.log(`Te quedaste sin intentos. El número era ${numeroSecreto}.`);
}