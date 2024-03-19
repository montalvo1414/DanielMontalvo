document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario para este ejemplo

        var name = document.getElementById('name').value;
        var images = document.getElementById('images').files;

        if (name && images.length > 0) {
            // Mostrar el nombre ingresado
            document.getElementById('nombre').innerText = 'Nombre: ' + name;

            // Mostrar las imágenes
            for (var i = 0; i < images.length; i++) {
                var reader = new FileReader();
                reader.onload = (function(image, index) {
                    return function(e) {
                        var imgElement = document.createElement('img');
                        imgElement.src = e.target.result;
                        imgElement.alt = "Imagen cargada";
                        var imageOutputId = 'imagen' + (index + 1); // Obtener el ID correspondiente
                        var imageOutput = document.getElementById(imageOutputId); // Obtener el elemento img correspondiente
                        imageOutput.src = e.target.result; // Mostrar la imagen cargada
                    };
                })(images[i], i);
                reader.readAsDataURL(images[i]);
            }

            // Ocultar el formulario después de enviarlo
            document.getElementById('myForm').reset(); // Limpiar el formulario antes de ocultarlo
            document.getElementById('datos').style.display = 'none';
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });
});