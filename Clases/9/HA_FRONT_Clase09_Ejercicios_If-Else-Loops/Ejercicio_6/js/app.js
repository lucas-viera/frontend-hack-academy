for (var i = 0; i <= 100; i++) {
  if (i % 4 === 0) {
    // Se imprime en consola:
    console.log(i);
  }
}

/********************************************/

// Se imprime línea vacía como separación:
console.log("");

/********************************************/

// OTRA MANERA (más eficiente):
// De esta forma, sólo se hacen 26 iteraciones.

for (var i = 0; i <= 100; i = i + 4) {
  console.log(i);
}
