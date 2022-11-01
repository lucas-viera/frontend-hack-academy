var myApp = new Vue({
  el: '#app',
  data: {
    mensaje: 'Clase 16 - Ejercicio 1',
    peliculaBuscada: '',
    pelicula: {},
    peliculaFueBuscada: false,
    peliculaEncontrada: true,
  }
})

function buscarPelicula() {
  myApp.peliculaEncontrada = false;
  var url = 'https://private.omdbapi.com/?apikey=bef9c583&t=' + myApp.peliculaBuscada;

  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (pelicula) {
      myApp.pelicula = pelicula;
      myApp.peliculaFueBuscada = true;
      myApp.peliculaEncontrada = true;
    })
}