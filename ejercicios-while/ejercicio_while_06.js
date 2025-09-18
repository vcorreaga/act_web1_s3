let nombres = ["Lorena", "Jose", "Mariana", "Viadis", "Milena"];
let buscado = "Jose"; 
let i = 0;
let encontrado = false;

while (i < nombres.length) {
    if (nombres[i] === buscado) {
        console.log(`${buscado} se encontró en la posición ${i}`);
        encontrado = true;
        break;
    }
    i++;
}

if (!encontrado) {
    console.log(`${buscado} no está en la lista.`);
}