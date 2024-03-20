document.addEventListener("DOMContentLoaded", function() {
    // Mostrar las imágenes almacenadas al cargar la página
    for (var i = 1; i <= localStorage.length / 2; i++) {
        var imagenData = localStorage.getItem("imagen" + i);
        if (imagenData) {
            var imagenID = "imagen" + i;
            var imagen = document.getElementById(imagenID);
            if (imagen) {
                imagen.src = imagenData;
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
        } else {
            alert("Por favor, ingresa un nombre y selecciona al menos una imagen.");
        }
    });

    document.getElementById("compartir").addEventListener("click", function() {
        var url = window.location.href.split('?')[0]; // Obtener la URL actual sin los parámetros de la consulta
        var datosCompartir = "?";
        for (var i = 1; i <= localStorage.length / 2; i++) {
            var nombre = localStorage.getItem("nombre" + i);
            var imagenData = localStorage.getItem("imagen" + i);
            datosCompartir += "nombre" + i + "=" + encodeURIComponent(nombre) + "&imagen" + i + "=" + encodeURIComponent(imagenData) + "&";
        }
        var enlaceCompartir = url + datosCompartir;
        
        // Copiar el enlace al portapapeles
        navigator.clipboard.writeText(enlaceCompartir).then(function() {
            alert("Enlace copiado al portapapeles: " + enlaceCompartir);
        }, function(err) {
            console.error('Error al copiar el enlace: ', err);
        });
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
    });
});
