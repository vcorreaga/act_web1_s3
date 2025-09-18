let contraseña = "";
let intentos = 0;

while (contraseña !== "admin123") {
    console.log("Por favor, escribe la contraseña:");
    
    
    if (intentos === 0) {
        contraseña = "12345"; 
    } else if (intentos === 1) {
        contraseña = "clave"; 
    } else {
        contraseña = "admin123"; 
    }

    if (contraseña !== "admin123") {
        console.log("Contraseña incorrecta.");
        intentos++;
    }
}

console.log("¡Acceso permitido!");
console.log("Intentos fallidos: " + intentos);