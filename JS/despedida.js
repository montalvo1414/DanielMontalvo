document.getElementById('sobre').addEventListener('click', function() {
    var mensajeDiv = document.getElementById('carta');
    var imageDiv = document.getElementById('image');
    var textoDiv = document.getElementById('texto');

    mensajeDiv.style.display = 'block';
    imageDiv.style.display = 'block';
    textoDiv.style.display = 'block';
    
    mensajeDiv.style.animation = 'carta 2s forwards';
    imageDiv.style.animation = 'image 2s forwards';
    textoDiv.style.animation = 'texto 2s forwards';
    animarTexto(document.getElementById('texto'));
});

function animarTexto(elemento) {
  var texto = elemento.textContent;
  elemento.textContent = '';

  var index = 0;
  var intervalo = setInterval(function() {
      if (index < texto.length) {
          elemento.textContent += texto[index];
          index++;
      } else {
          clearInterval(intervalo);
      }
  }, 100);
}
document.getElementById('carta').addEventListener('click', function() {
    var mensajeDiv = document.getElementById('carta');
    var imageDiv = document.getElementById('image');
    var textoDiv = document.getElementById('texto');

    mensajeDiv.style.animation = 'carta1 2s forwards';
    imageDiv.style.animation = 'image1 2s forwards';
    textoDiv.style.animation = 'texto1 2s forwards';
})