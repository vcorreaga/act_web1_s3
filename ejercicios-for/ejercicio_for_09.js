let numero = 2;
let suma = 0;

console.log("Secuencia matemática:");
for (let i = 0; i < 10; i++) {
    console.log(numero);
    suma += numero;
    numero *= 2; 
}

console.log("Suma total de la secuencia:", suma);
