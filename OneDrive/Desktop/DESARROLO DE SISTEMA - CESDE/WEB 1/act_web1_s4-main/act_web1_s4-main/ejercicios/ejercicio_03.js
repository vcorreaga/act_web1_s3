const sumarArreglo = arreglo => arreglo.reduce((total, num) => total + num, 0);

console.log(sumarArreglo([1, 2, 3]));
console.log(sumarArreglo([10, 20, 30, 40]));
