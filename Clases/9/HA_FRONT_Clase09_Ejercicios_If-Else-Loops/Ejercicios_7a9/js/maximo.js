function maximo(lista) {
  // Inicialmente, suponemos que el máximo elemento es el primero:
  var max = lista[0];

  // Luego, recorremos la lista a partir del segundo elemento.
  // Por eso el for comienza en 1 (y no en cero).
  for (var i = 1; i < lista.length; i++) {
    if (max < lista[i]) {
      max = lista[i];
    }
  }

  // Finalmente, retornamos el máximo:
  return max;
}

// TESTS:

console.log("¿Cuál es la mayor edad del array de edades?");
console.log(maximo(edades));
