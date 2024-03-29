document.getElementById('hoja').addEventListener('click', function() {
    var mensajeDiv = document.getElementById('mensaje');
    var triangulo = document.getElementById('triangulo');
    var triangulos = document.getElementById('triangulo3');
    var img = document.getElementById('imagenMostrada');
    var men = document.getElementById('men');
    mensajeDiv.style.display = 'block'; 
    triangulo.style.display = 'block'; 
    triangulos.style.display = 'block'; 
    men.style.display = 'block';
    img.style.display = 'block';
    mensajeDiv.style.animation = 'mensaje 1s forwards';
    mensajeDiv.style.animationPlayState = 'mensaje 1s forwards';
    triangulo.style.animation = 'triang 2s forwards';
    triangulos.style.animation = 'trian 2s forwards';
    men.style.animation = 'men 1s forwards';
    img.style.animation = 'img 1s forwards';

});

document.getElementById('mensaje').addEventListener('click', function() {
    var mensajeDiv = document.getElementById('mensaje');
    var triangulo = document.getElementById('triangulo');
    var triangulos = document.getElementById('triangulo3');
    var img = document.getElementById('imagenMostrada');

    var men = document.getElementById('men');
    mensajeDiv.style.height = '100px';
    mensajeDiv.style.animation = 'mensajes 1s forwards';
    triangulo.style.animation = 'triang1 2s forwards';
    triangulos.style.animation = 'trianl 2s forwards';
    men.style.animation = 'men1 1s forwards';
    img.style.animation = 'img1 1s forwards';

});

function cargarValores() {
  var nombreGuardado = localStorage.getItem("nombre");
  var nombre2Guardado = localStorage.getItem("nombre2");
  var imagenGuardada = localStorage.getItem("imagenSubida");

  if (nombreGuardado && nombre2Guardado) {
    document.getElementById("apodo1").textContent = 'ATT: ' + nombreGuardado;
    document.getElementById("apodo2").textContent = 'Para: ' + nombre2Guardado;
  }
  if (imagenGuardada) {
    document.getElementById("imagenMostrada").src = imagenGuardada;
  }
}

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();

  var nombre = document.getElementById("nombre").value;
  var nombre2 = document.getElementById("nombre2").value;
  var imagen = document.getElementById("imagen").files[0];

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("nombre2", nombre2);

  var reader = new FileReader();
  reader.onload = function(event) {
    localStorage.setItem("imagenSubida", event.target.result);
    document.getElementById("imagenMostrada").src = event.target.result;
  };
  reader.readAsDataURL(imagen);

  document.getElementById("apodo1").textContent = 'ATT: ' + nombre;
  document.getElementById("apodo2").textContent = 'Para: ' + nombre2;
});

cargarValores();

/*fecha*/
var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear().toString().substr(-2);
document.getElementById("demo").innerHTML = date;