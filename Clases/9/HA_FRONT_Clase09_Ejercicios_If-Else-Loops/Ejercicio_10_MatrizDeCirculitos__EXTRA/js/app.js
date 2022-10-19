
// Se itera por cada fila:
for (var f = 1; f <= 5; f++) {

    // Se crea una variable auxiliar que contendrá el contenido de cada línea:
    var linea = "";

    // Se itera por cada columna (dentro de cada fila):
    for (var c = 1; c <= 5; c++)  {

        // Si la fila es mayor o igual a la columna, se agerga un cero.
        // En caso contrario, se agrega un punto;
        if (c <= f) {
            linea = linea + " 0 ";
        }
        else {
            linea = linea + " . ";
        }
    }

    // Se imprime la linea:
    console.log(linea);
}
