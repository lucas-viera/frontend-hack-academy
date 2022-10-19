function estaElemento(lista, elemento) {
  for (var elem of lista) {
    if (elem === elemento) {
      return true;
    }
  }
  return false;
}

// ----------------------------------------------------------------------------
// Otra manera de resolverlo.
// ----------------------------------------------------------------------------

function estaElemento_v2(lista, elemento) {
  for (var i = 0; i < lista.length; i++) {
    if (lista[i] == elemento) {
      return true;
    }
  }
  return false;
}

// ----------------------------------------------------------------------------
// Otra manera de resolverlo.
// Usando la función `indexOf`, integrada en JavaScript.
// Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// ----------------------------------------------------------------------------

function estaElemento_v3(lista, elemento) {
  return lista.indexOf(elemento) != -1;
}

// ----------------------------------------------------------------------------
// Otra menra de resolverlo.
// Usando la función `includes`, integrada en JavaScript.
// Link: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/includes
// ----------------------------------------------------------------------------

function estaElemento_v4(lista, elemento) {
  return lista.includes(elemento);
}

// ----------------------------------------------------------------------------
// Otra manera de resolverlo.
// Usando un `while`, que es una estructura similar al `for`,
// con el mismo poder expresivo, aunque con una sintaxis diferente.
// ----------------------------------------------------------------------------

function estaElemento_v5(lista, elemento) {
  // Variable auxiliar para guardar si el elemento está (true) o no (false) en la lista.
  // Inicialmente se supone que no está.
  var esta = false;

  // Variable auxiliar para guardar la posición de la lista que se está recorriendo.
  // Se empieza por la posición 0.
  var posicion = 0;

  while (!esta && posicion < lista.length) {
    if (lista[posicion] == elemento) {
      esta = true;
    }
    posicion++;
  }

  return esta;
}

// ----------------------------------------------------------------------------
// TESTS:
// ----------------------------------------------------------------------------

console.log("¿Peugeot está en el array de marcas?");
console.log(estaElemento(marcas, "Peugeot"));

console.log(""); // Genera una línea vacía.

console.log("¿Volvo está en el array de marcas?");
console.log(estaElemento(marcas, "Volvo"));

console.log(""); // Genera una línea vacía.

console.log("Limón está en el array de frutas?");
console.log(estaElemento(frutas, "Limón"));

console.log(""); // Genera una línea vacía.

console.log("¿Frutilla está en el array de frutas?");
console.log(estaElemento(frutas, "Frutilla"));

console.log(""); // Genera una línea vacía.
