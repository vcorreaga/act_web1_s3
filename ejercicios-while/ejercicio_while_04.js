let numero = 0;
let contador = 0;

while (numero <= 95) {
    numero = Math.floor(Math.random() * 100) + 1;
    console.log("Número generado:", numero);
    contador++;
}

console.log("¡Se generó un número mayor a 95!");
console.log("Total de números generados:", contador);