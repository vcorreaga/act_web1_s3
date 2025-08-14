const prompt = require("prompt-sync")();

let suma = 0;
let cantidad = 0;
let nota = 0;

let notaMayor = 0;
let notaMenor = 100;

while (nota !== -1) {
    nota = parseInt(prompt("Ingresa una nota entre 0 y 100 (o -1 para terminar): "));

    if (nota === -1) {
        break;
    }

    if (nota >= 0 && nota <= 100) {
        suma += nota;
        cantidad++;

        
        if (nota > notaMayor) {
            notaMayor = nota;
        }

        
        if (nota < notaMenor) {
            notaMenor = nota;
        }
    } else {
        console.log("Nota inválida. Ingresa un número entre 0 y 100.");
    }
}

if (cantidad > 0) {
    let promedio = suma / cantidad;
    console.log("\n Resultados:");
    console.log("Promedio de notas: " + promedio.toFixed(2));
    console.log("Nota más alta: " + notaMayor);
    console.log("Nota más baja: " + notaMenor);
} else {
    console.log("No se ingresaron notas válidas.");
}
