let frase = "Anita mi mejor amiga";

let limpia = "";
for (let i = 0; i < frase.length; i++) {
    let letra = frase[i].toLowerCase();
    if (letra !== " ") {
        limpia += letra;
    }
}

let invertida = "";
for (let i = limpia.length - 1; i >= 0; i--) {
    invertida += limpia[i];
}

if (limpia === invertida) {
    console.log(`La frase "${frase}" es un palíndromo.`);
} else {
    console.log(`La frase "${frase}" NO es un palíndromo.`);
}