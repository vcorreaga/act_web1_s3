let cantidadPrimos = 0;

console.log("Números primos entre 1 y 100:");

for (let numero = 2; numero <= 100; numero++) {
    let esPrimo = true;

    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log(numero);
        cantidadPrimos++;
    }
}

console.log("Cantidad total de números primos:", cantidadPrimos);