function validarAnioNacimiento(anio) {
  if (typeof anio !== "number") {
    return false;
  }

  /**
   * Las siguientes 2 líneas de código son opcionales.
   * Sirven para que, en lugar de usar un valor "fijo" para el año,
   * usar el valor del año configurado en la computadora.
   * De esta manera, esta función será útil incluso el año que viene.
   */
  var fechaActual = new Date();
  var anioActual = fechaActual.getFullYear();

  if (anio <= anioActual - 100) {
    return false;
  }

  if (anio > anioActual) {
    return false;
  }

  return true;
}

/*****************************************************************************/

// Tests:
console.log("%c\nEjercicio - Validar Año de Nacimiento", "color:#FF6600");
var todayDate = new Date();
var year = todayDate.getFullYear();
var nextYear = year + 1;
console.log("'María' es válido: " + validarAnioNacimiento("María")); // Debería retonar false.
console.log("0 es válido: " + validarAnioNacimiento(0)); // Debería retonar false.
console.log("1920 es válido: " + validarAnioNacimiento(1920)); // Debería retonar false.
console.log("1921 es válido: " + validarAnioNacimiento(1921)); // Debería retonar true.
console.log(year + " es válido: " + validarAnioNacimiento(year)); // Debería retonar true.
console.log(nextYear + " es válido: " + validarAnioNacimiento(nextYear)); // Debería retonar false.
