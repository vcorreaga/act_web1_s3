let numero = 5;
let factorial = 1;
let i = 1;

console.log(`Calculando el factorial de ${numero}...`);

while (i <= numero) {
    console.log(`${factorial} x ${i} = ${factorial * i}`);
    factorial = factorial * i;
    i++;
}

console.log(`El factorial de ${numero} es: ${factorial}`);