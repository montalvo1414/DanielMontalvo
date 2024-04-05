
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Evita que se envíe el formulario
            var nombre = document.getElementById("nombre").value;
            var correo = document.getElementById("correo").value;

            // Almacena la información en el localStorage
            localStorage.setItem("nombre", nombre);
            localStorage.setItem("correo", correo);

            // Muestra la información del usuario
            document.getElementById("nombreUsuario").innerText = nombre;
            document.getElementById("correoUsuario").innerText = correo;
            document.getElementById("cuenta").style.display = "block"; // Muestra el elemento de cuenta
        });

        // Verifica si hay información de usuario almacenada en el localStorage
        var nombreGuardado = localStorage.getItem("nombre");
        var correoGuardado = localStorage.getItem("correo");

        if (nombreGuardado && correoGuardado) {
            document.getElementById("nombreUsuario").innerText = nombreGuardado;
            document.getElementById("correoUsuario").innerText = correoGuardado;
            document.getElementById("cuenta").style.display = "block"; // Muestra el elemento de cuenta
        }