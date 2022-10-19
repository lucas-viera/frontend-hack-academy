function validarNombre(nom) {
  if (typeof nom !== "string") {
    return false;
  }

  if (nom === "") {
    return false;
  }

  return true;
}

// Tests:
console.log("%c\nEjercicio - Validar Nombre", "color:#FF6600");
console.log("'María' es válido: " + validarNombre("María")); // Debería retonar true.
console.log("'' es válido: " + validarNombre("")); // Debería retonar false.
console.log("38 es válido: " + validarNombre(38)); // Debería retonar false.
console.log("'38' es válido: " + validarNombre("38")); // Debería retonar true.
