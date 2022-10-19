function mostrarArray(lista) {
  for (var elem of lista) {
    console.log(elem);
  }
}

// Otra manera de resolverlo:

function mostrarArray_v2(lista) {
  for (var i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}

// TESTS:

console.log("Las marcas que hay guardadas son:");
mostrarArray(marcas);

console.log(""); // Genera una línea vacía.

console.log("Las frutas que hay guardadas son:");
mostrarArray(frutas);

console.log(""); // Genera una línea vacía.

console.log("Las edades que hay guardadas son:");
mostrarArray(edades);

console.log(""); // Genera una línea vacía.
