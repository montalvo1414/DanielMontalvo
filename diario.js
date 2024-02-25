document.addEventListener("DOMContentLoaded", function() {
  // Ocultar el contenido del diario al cargar la página
  var elementosDiario = document.querySelectorAll('.diario .di');
  for (var i = 0; i < elementosDiario.length; i++) {
    elementosDiario[i].style.display = 'none';
  }
});

function mostrar(id) {
  var elementoMostrar = document.getElementById(id);
  if (elementoMostrar.style.display === 'block') {
    elementoMostrar.style.display = 'none';
  } else {
    // Ocultar todos los elementos del diario antes de mostrar el deseado
    var elementosDiario = document.querySelectorAll('.diario .di');
    for (var i = 0; i < elementosDiario.length; i++) {
      elementosDiario[i].style.display = 'none';
    }
    elementoMostrar.style.display = 'block'; 
  }

  // Verificar si estamos en el viewport definido en @media
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth <= 500) {
    var dias = document.querySelector('.dias');
    dias.style.display = 'none';
  }
  // Agregar evento clic a los elementos con la clase 'lavel' para mostrar el elemento 'dias'
var lavel = document.querySelectorAll('.lavel');
for (var i = 0; i < lavel.length; i++) {
  lavel[i].addEventListener('click', function() {
    var dias = document.querySelector('.dias');
    dias.style.display = 'block';
  });
}
}

