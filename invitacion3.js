document.addEventListener('DOMContentLoaded', function() {
  let hayImagenes = false;

  console.log("LocalStorage antes de cargar imágenes:", localStorage);

  // Obtener las claves del localStorage y filtrar las que empiezan con 'imagen'
  const keys = Object.keys(localStorage).filter(key => key.startsWith('imagen'));

  // Recorrer las claves y mostrar las imágenes
  keys.forEach(key => {
      const imageData = localStorage.getItem(key); // Obtener los datos de la imagen desde localStorage
      const imgElements = document.querySelectorAll(`#${key}, .mensajes #${key}`);
      imgElements.forEach(element => {
          element.src = imageData; // Asignar los datos de la imagen al src del elemento de imagen
      });
  });

  console.log("LocalStorage después de cargar imágenes:", localStorage); // Agregar un registro para verificar las imágenes cargadas

  hayImagenes = keys.length > 0; // Verificar si hay imágenes almacenadas

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

document.getElementById('datos').addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const images = formData.getAll('images');

  images.forEach((image, index) => {
      const reader = new FileReader(); // Crear un objeto FileReader para leer el contenido de la imagen
      reader.onload = function(event) {
          const imgData = event.target.result; // Obtener los datos de la imagen como base64
          const imgElement = document.getElementById(`imagen${index + 1}`);
          const imgElements = document.querySelectorAll(`.mensajes #imagen${index + 1}`);

          imgElement.src = imgData; // Asignar los datos de la imagen al src del elemento de imagen
          imgElements.forEach(element => {
              element.src = imgData; // Asignar los datos de la imagen al src del elemento de imagen en los mensajes
          });

          localStorage.setItem(`imagen${index + 1}`, imgData); // Guardar los datos de la imagen en localStorage
      };
      reader.readAsDataURL(image); // Leer la imagen como base64
  });

  document.getElementById('datos').style.display = 'none';
  document.getElementById('conteniner').style.display = 'block';
  document.getElementById('resetea').style.display = 'block';
}

document.getElementById("resetear").addEventListener("click", function() {
  localStorage.clear();
  document.getElementById('datos').reset();
  
  var imagenesContenedor = document.querySelectorAll("#conteniner .imagen");
  imagenesContenedor.forEach(function(imagen) {
    imagen.src = "";
  });
  
  var imagenesMensajes = document.querySelectorAll(".mensajes .imagen");
  imagenesMensajes.forEach(function(imagen) {
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
      mensajesContainer.style.display = 'none';
  });

    var mensajesContainer = document.querySelector('.mensajes');
    mensajesContainer.style.display = 'none';

    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener('click', function(index) {
            return function() {
                mensajesContainer.style.display = 'block';
                for (var j = 0; j < mensajes.length; j++) {
                    mensajes[j].style.display = 'none';
                }
                mensajes[index].style.display = 'block';
            };
        }(i));
    }

    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear().toString().substr(-2);

    var demoElements = document.querySelectorAll('p#demo');

    demoElements.forEach(function(element) {
        element.innerHTML = date;
    });