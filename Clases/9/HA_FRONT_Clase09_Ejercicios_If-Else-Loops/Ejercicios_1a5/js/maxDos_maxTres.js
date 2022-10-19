// Notar que esta función lleva 2 parámetros y "return".

function maximoDeDos(num1, num2) {
  var resultado;
  if (num1 <= num2) {
    resultado = num2;
  } else {
    resultado = num1;
  }
  return resultado;
}

// Tests:
console.log("%c\nEjercicio - Máximo de Dos", "color:#FF6600");
console.log("El máximo entre 22 y 30 es: " + maximoDeDos(22, 30)); // Debería retornar 30.
console.log("El máximo entre 30 y 22 es: " + maximoDeDos(30, 22)); // Debería retornar 30.
console.log("El máximo entre -5 y -4 es: " + maximoDeDos(-5, -4)); // Debería retornar -4.
console.log("El máximo entre 0 y 1000 es: " + maximoDeDos(0, 1000)); // Debería retornar 1000.

/*****************************************************************************/

// Notar que esta función lleva 3 parámetros y "return".

function maximoDeTres(num1, num2, num3) {
  var maximo = maximoDeDos(num1, num2);
  maximo = maximoDeDos(maximo, num3);
  return maximo;
}

// Tests:
console.log("%c\nEjercicio - Máximo de Tres", "color:#FF6600");
console.log("El máximo entre 22, 30 y 40 es: " + maximoDeTres(22, 30, 40)); // Debería retornar 40.
console.log("El máximo entre 40, 30 y 22 es: " + maximoDeTres(40, 30, 22)); // Debería retornar 40.
console.log("El máximo entre -5, -4 y -1 es: " + maximoDeTres(-5, -4, -1)); // Debería retornar -1.
console.log("El máximo entre 0, 1000 y -45 es: " + maximoDeTres(0, 1000, -45)); // Debería retornar 1000.
