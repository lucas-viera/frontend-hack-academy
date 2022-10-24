var marcas = ["bmw", "peugeot", "chevrolet", "subaru", "nissan"];
function mostrarMarcas() {
  var listado = document.querySelector("#listaMarcas");
  listado.innerHTML = "";
  for (var marca of marcas) {
    listado.insertAdjacentHTML(
      "beforeend",
      `
    <li class="text-capitalize">${marca}</li>
    `
    );
  }
}
document
  .querySelector("#mostrarMarcas")
  .addEventListener("click", mostrarMarcas);
document
  .querySelector("#eliminarUltimaMarca")
  .addEventListener("click", function () {
    marcas.pop();
    mostrarMarcas();
  });
document.querySelector("#agregarMarca").addEventListener("click", function () {
  var nuevaMarca = document.querySelector("#escribirMarca").value.toLowerCase();
  var posicion = marcas.indexOf(nuevaMarca);
  console.log(posicion);
  if (nuevaMarca === "") {
    ///esto sirve para saber si el usuario no ingreso un campo vacio
    mostrarAlerta("danger", "CAMPO VACIO: introducir marca");
  } else if (marcas.indexOf(nuevaMarca) !== -1) {
    /// el signo de ! antes del == hace que sea estrictamente distinto al valor ingresado luego
    mostrarAlerta("warning", "Esta marca ya se encuentra listada");
  } else {
    marcas.push(nuevaMarca);
    mostrarMarcas();
  }
});
document
  .querySelector("#eliminarMarcaSeleccionada")
  .addEventListener("click", function () {
    var marcaSeleccionada = document
      .querySelector("#eliminarMarca")
      .value.toLowerCase();
    if (marcaSeleccionada === "") {
      mostrarAlerta("danger", "CAMPO VACIO: introducir marca");
    } else if (marcas.indexOf(marcaSeleccionada) === -1) {
      mostrarAlerta("danger", "Esta marca no se encuentra listada");
    } else {
      var posicion = marcas.indexOf(marcaSeleccionada);
      marcas.splice(posicion, 1);
      mostrarMarcas();
    }
  });
function mostrarAlerta(color, texto) {
  var aux = `
    <div class="alert alert-${color} alert-dismissible fade show" role="alert">
  <strong> error: </strong> ${texto}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;
  document.querySelector("#alerta").innerHTML = "";
  document.querySelector("#alerta").insertAdjacentHTML("beforeend", aux);
}
