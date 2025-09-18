let numero = 1;
let sumaPares = 0;
let contadorPares = 0;

while (numero <= 50) {
    if (numero % 2 === 0) {
        sumaPares += numero;
        contadorPares++;
    }
    numero++;
}

console.log("Suma total de pares entre 1 y 50:", sumaPares);
console.log("Cantidad de números pares sumados:", contadorPares);