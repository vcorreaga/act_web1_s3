let textoInvertido = "";

for (let i = textoOriginal.length - 1; i >= 0; i--) {
    textoInvertido += textoOriginal[i]; 
}
console.log("Texto original: " + textoOriginal);
console.log("Texto invertido: " + textoInvertido);