const promedio = arreglo => arreglo.reduce((a, b) => a + b, 0) / arreglo.length;
console.log(promedio([10, 20, 30]));
