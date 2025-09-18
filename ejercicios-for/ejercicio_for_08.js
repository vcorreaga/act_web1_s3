let frase = "Este es un ejemplo de frase para contar vocales.";
frase = frase.toLowerCase(); 

let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;


for (let i = 0; i < frase.length; i++) {
    let letra = frase[i];

    if (letra === "a") {
        contadorA++;
    } else if (letra === "e") {
        contadorE++;
    } else if (letra === "i") {
        contadorI++;
    } else if (letra === "o") {
        contadorO++;
    } else if (letra === "u") {
        contadorU++;
    }
}


console.log("Conteo de vocales:");
console.log("a:", contadorA);
console.log("e:", contadorE);
console.log("i:", contadorI);
console.log("o:", contadorO);
console.log("u:", contadorU);