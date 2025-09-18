let base = 3;
let exponente = 4;

let resultado = 1;

for (let i = 1; i <= exponente; i++) {
    resultado *= base;
    console.log(`${base} ^ ${i} = ${resultado}`);
}

console.log(`El resultado de ${base} elevado a la ${exponente} es: ${resultado}`);