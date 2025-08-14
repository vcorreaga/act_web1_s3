function esCorreo(correo) {
    return correo.includes("@") && correo.endsWith(".com");
}

console.log(esCorreo("test@example.com"));
