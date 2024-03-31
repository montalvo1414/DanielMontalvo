document.getElementById('datos').addEventListener('submit', handleFormSubmit);
function handleFormSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const images = formData.getAll('images');
  
  images.forEach((image, index) => {
    const imgElement = document.getElementById(`imagen${index + 1}`);
    imgElement.src = URL.createObjectURL(image);
    
    // Guardar la URL de la imagen en el almacenamiento local
    localStorage.setItem(`imagen${index + 1}`, imgElement.src);
  });
  document.getElementById('datos').style.display = 'none'
  document.getElementById('conteniner').style.display = 'block'
  document.getElementById('resetea').style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function() {
  let hayImagenes = false; // Variable para indicar si hay imágenes almacenadas
  
  // Verificar si hay imágenes almacenadas
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('imagen')) {
      const imgElement = document.getElementById(key);
      imgElement.src = localStorage.getItem(key);
      hayImagenes = true; // Hay imágenes almacenadas
    }
  }

  if (hayImagenes) {
    document.getElementById('datos').style.display = 'none';
    document.getElementById('conteniner').style.display = 'block';
    document.getElementById('resetea').style.display = 'block';

  } else {
    document.getElementById('datos').style.display = 'block';
    document.getElementById('conteniner').style.display = 'none';
    document.getElementById('resetea').style.display = 'none';
  }
});
  
  document.getElementById("resetear").addEventListener("click", function() {
    localStorage.clear();
    document.getElementById('datos').reset();
    var imagenes = document.querySelectorAll(".imagen");
    imagenes.forEach(function(imagen) {
      imagen.src = "";
    });
  
    document.getElementById('datos').style.display = 'block';
    document.getElementById('conteniner').style.display = 'none';
    document.getElementById('resetea').style.display = 'none';
  });
  var imagenes = document.querySelectorAll('#conteniner .imagen');
    var mensajes = document.querySelectorAll('.mensajes > div');
    var cerrarBoton = document.getElementById('cerrar');

    cerrarBoton.addEventListener('click', function() {
      // Ocultamos el div de mensajes al hacer clic en el botón de cerrar
      mensajesContainer.style.display = 'none';
  });

    // Ocultamos el div de mensajes
    var mensajesContainer = document.querySelector('.mensajes');
    mensajesContainer.style.display = 'none';

    // Agregamos un evento de clic a cada imagen
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener('click', function(index) {
            return function() {
                // Mostramos el div de mensajes
                mensajesContainer.style.display = 'block';
                // Ocultamos todos los mensajes
                for (var j = 0; j < mensajes.length; j++) {
                    mensajes[j].style.display = 'none';
                }
                // Mostramos el mensaje correspondiente al índice
                mensajes[index].style.display = 'block';
            };
        }(i));
    }
