document.addEventListener('DOMContentLoaded', function() {
    const switchButton = document.getElementById('switch');
    const isDarkMode = localStorage.getItem('darkMode') === 'true'; // Verificar si el modo oscuro estaba activado anteriormente

    // Función para activar el modo oscuro
    function enableDarkMode() {
        document.body.classList.add('dark');
        switchButton.classList.add('active');
        localStorage.setItem('darkMode', 'true'); // Almacenar el estado del modo oscuro en localStorage
    }

    // Función para desactivar el modo oscuro
    function disableDarkMode() {
        document.body.classList.remove('dark');
        switchButton.classList.remove('active');
        localStorage.setItem('darkMode', 'false'); // Almacenar el estado del modo oscuro en localStorage
    }

    // Escucha el evento click del botón de modo oscuro
    switchButton.addEventListener('click', () => {
        if (document.body.classList.contains('dark')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    // Si el modo oscuro estaba activado, actívalo nuevamente al cargar la página
    if (isDarkMode) {
        enableDarkMode();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var perfil = document.querySelector('.perfil');
    var cuenta = document.getElementById('cuenta');
    var cerrarCuentaBtn = document.getElementById('cerrarCuenta'); // Agregar esta línea
  
    perfil.addEventListener('click', function(event) {
      event.preventDefault();
      if (cuenta.style.display === 'none') {
        cuenta.style.display = 'block';
      } else {
        cuenta.style.display = 'none';
      }
    });
    cerrarCuentaBtn.addEventListener('click', function() {
        cuenta.style.display = 'none'; // Modificar esta línea
    });
});