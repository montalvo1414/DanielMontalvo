document.addEventListener("DOMContentLoaded", function() {
  // Ocultar el contenido del diario al cargar la página
  var elementosDiario = document.querySelectorAll('.diario .di');
  for (var i = 0; i < elementosDiario.length; i++) {
      elementosDiario[i].style.display = 'none';
  }
});
function mostrar(id) {
  var elementoMostrar = document.getElementById(id);
  // Verificar si el elemento está visible
  if (elementoMostrar.style.display === 'block') {
    // Si está visible, se oculta
    elementoMostrar.style.display = 'none';
  } else {
    // Si no está visible, se muestra y se ocultan los demás
    var elementosDiario = document.querySelectorAll('.diario p');
    for (var i = 0; i < elementosDiario.length; i++) {
      elementosDiario[i].style.display = 'none';
    }
    elementoMostrar.style.display = 'block';
  }
}


