// Se crea una variable contador para determinar cuándo colocar un cuadrado
// negro y cuándo colocar un cuadrado blanco:
var contador = 1;

// Comienza Fila:

for (var f = 1; f <= 8; f++) {
  // Comienza Columna (dentro de fila):

  for (var c = 1; c <= 8; c++) {
    // Se crea un elemento cuadrado:
    var cuadrado = document.createElement("div");

    // Se le asigna una clase según la posición en el tablero.
    if (contador % 2 !== 0) {
      cuadrado.classList.add("cuadrado-blanco");
    } else {
      cuadrado.classList.add("cuadrado-negro");
    }

    // Se inserta el cuadro en el tablero:
    document.querySelector("#tablero").append(cuadrado);

    contador++;
  }

  contador++; // Para cada fila nueva, es necesario aumentar el contador una unidad adicional.
}
