var app = new Vue({
  el: "#blogApp",
  data: {
    articles: articles,
  },
});

/**
 * NOTAS:
 *    (1) En el HTML debe existir el elemento con id `blogApp`.
 *    (2) El primer `articles` es un nombre arbitrario para la propiedad
 *        (dentro de `data`) que contendrá la lista de artículos.
 *    (3) El segundo `articles` hace referencia a la variable declarada
 *        en el archivo articles.js.
 *    (4) Por un tema de consistencia, se utilizó el mismo nombre.
 *    (5) En JavaScript ES6+ también se podría haber escrito el objeto
 *        `data` (de forma abreviada) de la siguiente manera:
 *        `data: { articles }`.
 */
