let n1 = 0;
let n2 = 1;
let contador = 0;

console.log("Secuencia de Fibonacci:");

while (contador < 15) {
    console.log(n1);
    let siguiente = n1 + n2;
    n1 = n2;
    n2 = siguiente;
    contador++;
}