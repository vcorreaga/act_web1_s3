let numeros = [];
for (let i = 0; i < 20; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Números generados:", numeros);

let mayor = numeros[0];
let menor = numeros[0];
let suma = 0;
let pares = 0;
let impares = 0;


for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    suma += numero;

    if (numero > mayor) {
        mayor = numero;
    }

    if (numero < menor) {
        menor = numero;
    }

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

let promedio = suma / numeros.length;

console.log("Número mayor:", mayor);
console.log("Número menor:", menor);
console.log("Suma total:", suma);
console.log("Promedio:", promedio.toFixed(2));
console.log("Cantidad de pares:", pares);
console.log("Cantidad de impares:", impares);