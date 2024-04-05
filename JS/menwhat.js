document.getElementById('enviarmensaje').addEventListener('click', function() {
    var numeroTelefono = '51904858828'; 
    var mensaje = 'ⓘ Comentario 𝙋𝙧𝙚𝙢𝙞𝙪𝙢 no es posible verlo por indecisa';
    var enlaceWhatsApp = 'https://wa.me/' + numeroTelefono + '?text=' + encodeURIComponent(mensaje);
    window.open(enlaceWhatsApp, '_blank');
});