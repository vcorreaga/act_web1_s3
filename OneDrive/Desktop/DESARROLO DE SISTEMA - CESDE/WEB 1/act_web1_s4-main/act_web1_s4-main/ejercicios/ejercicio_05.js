function contarVocales(cadena) {
  if (cadena.length === 0) return 0;

  const vocal = "aeiouAEIOU".includes(cadena[0]) ? 1 : 0;
  return vocal + contarVocales(cadena.slice(1));
}

console.log(contarVocales("hola"));
