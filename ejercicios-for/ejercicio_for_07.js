let filas = 5;
let columnas = 5;

for (let i = 0; i < filas; i++) {
    let fila = ""; 

    for (let j = 0; j < columnas; j++) {
        let valor = i + j;
        fila += valor + "\t"; 
    }

    console.log(fila);
}