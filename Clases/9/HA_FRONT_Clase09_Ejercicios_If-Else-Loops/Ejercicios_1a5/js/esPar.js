function esPar(num) {
  return num % 2 === 0;
}

/*****************************************************************************/

// Tests:
console.log("%c\nEjercicio - Número es Par", "color:#FF6600");
console.log("0 es par: " + esPar(0)); // Debería retonar true.
console.log("1 es par: " + esPar(1)); // Debería retonar false.
console.log("2 es par: " + esPar(2)); // Debería retonar true.
console.log("3 es par: " + esPar(3)); // Debería retonar false.
console.log("-3 es par: " + esPar(-3)); // Debería retonar false.
console.log("4 es par: " + esPar(4)); // Debería retonar true.
console.log("-4 es par: " + esPar(-4)); // Debería retonar true.
