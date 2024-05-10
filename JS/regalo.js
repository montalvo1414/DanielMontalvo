
document.getElementById('notificacion').addEventListener('click', function() {
    var mensajeDiv = document.getElementById('todo');
    var imageDiv = document.getElementById('mensaje');
    var textoDiv = document.getElementById('texto');
    var noteDiv = document.getElementById('notificacion');
    var note2Div = document.getElementById('notificacion2');

    mensajeDiv.style.display = 'flex';
    imageDiv.style.display = 'flex';
    textoDiv.style.display = 'block';
    noteDiv.style.display = 'none';
    note2Div.style.display = 'block';
    
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

  document.getElementById('notificacion2').addEventListener('click', function() {
    var mensajeDiv = document.getElementById('todo');
    var imageDiv = document.getElementById('mensaje');
    var textoDiv = document.getElementById('texto');
    var noteDiv = document.getElementById('notificacion');
    var note2Div = document.getElementById('notificacion2');

    mensajeDiv.style.display = 'none';
    imageDiv.style.display = 'none';
    textoDiv.style.display = 'none';
    noteDiv.style.display = 'block';
    note2Div.style.display = 'none';

});