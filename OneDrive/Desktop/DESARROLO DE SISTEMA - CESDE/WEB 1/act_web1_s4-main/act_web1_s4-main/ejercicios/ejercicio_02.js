const saludar = function(nombre = "Invitado") {
    return `¡Hola, ${nombre}!`;
};

console.log(saludar());
console.log(saludar("Viadis"));
