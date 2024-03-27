document.addEventListener("DOMContentLoaded", function() {
    // Mostrar las imágenes almacenadas al cargar la página
    for (var i = 1; i <= localStorage.length / 2; i++) {
        var imagenData = localStorage.getItem("imagen" + i);
        if (imagenData) {
            var imagenID = "imagen" + i;
            var imagen = document.getElementById(imagenID);
            if (imagen) {
                imagen.src = imagenData;
                document.getElementById('datos').style.display = 'none';
                document.getElementById('final').style.display = 'block';

                setTimeout(cambiarP, 42000);
            }
        }
    }
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var nombre = document.getElementById("name").value;
        var archivos = document.getElementById("images").files;
    
        if (archivos.length > 0 && nombre.trim() !== "") {
            for (var i = 0; i < archivos.length; i++) {
                var reader = new FileReader();
                reader.onload = (function(nombre, index) {
                    return function(e) {
                        var imagenData = e.target.result;
                        // Almacenar en el localStorage
                        localStorage.setItem("nombre" + index, nombre);
                        localStorage.setItem("imagen" + index, imagenData);
                        // Mostrar la imagen
                        var imagenID = "imagen" + index;
                        var imagen = document.getElementById(imagenID);
                        if (imagen) {
                            imagen.src = imagenData;
                        }
                    };
                })(nombre, i + 1); // El índice empieza en 1
                reader.readAsDataURL(archivos[i]);
            }
            // Mostrar el nombre
            document.getElementById("nombre").textContent = "Nombre: " + nombre;
            document.getElementById('datos').style.display = 'none';
            document.getElementById('final').style.display = 'block';

            setTimeout(cambiarP, 42000);

        } else {
            alert("Por favor, ingresa un nombre y selecciona al menos una imagen.");
        }
    });

    document.getElementById("resetear").addEventListener("click", function() {
        localStorage.clear(); // Limpiar el almacenamiento local
        document.getElementById("myForm").reset(); // Resetear el formulario
        document.getElementById("nombre").textContent = ""; // Limpiar el nombre mostrado
        // Limpiar las imágenes mostradas
        var imagenes = document.querySelectorAll(".imageOutput");
        imagenes.forEach(function(imagen) {
            imagen.src = "";
        });
        document.getElementById('datos').style.display = 'block';
        document.getElementById('final').style.display = 'none';
    });

    function cambiarP() {
        var divs = document.querySelectorAll(".p");
        divs.forEach(function(div) {
          var computedStyle = window.getComputedStyle(div);
          if (computedStyle.getPropertyValue("position") === "fixed") {
            div.style.position = "relative";
            div.style.left = "0%";
            div.style.height = "400px";
            div.style.boxShadow = "none";
          }
        });
      }
      
      
});