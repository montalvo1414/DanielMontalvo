var selectedContact = null;

function selectContact(contact) {
    selectedContact = contact;
    document.getElementById("chat-container").style.display = "block";
    document.getElementById("mensajes").innerHTML = ""; // Clear previous messages
    
    var width = window.innerWidth;
    var contacts = document.getElementById("contactos");
    var chatContainer = document.getElementById("chat-container");

    if (width <= 500) { // Verificar el ancho de la ventana
        contacts.style.display = "none"; // Ocultar la lista de contactos solo si el ancho es menor o igual a 500px
        chatContainer.style.display = "block"; // Mostrar el chat-container
    }
}

function sendMessage() {
    var messageInput = document.getElementById("mensajes-input");
    var messageText = messageInput.value.trim();

    if (messageText !== "" && selectedContact !== null) {
        var messagesContainer = document.getElementById("mensajes");
        var messageDiv = document.createElement("div");
        messageDiv.className = "mensaje";
        messageDiv.textContent = messageText;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        messageInput.value = "";
    }
}

function hideContacts() {
    var width = window.innerWidth;
    var contacts = document.getElementById("contactos");
    var chatContainer = document.getElementById("chat-container");

    if (width <= 500) { // Si el ancho es menor o igual a 600px, mostrar los contactos y ocultar el chat
        contacts.style.display = "block";
        chatContainer.style.display = "none";
    } else if (width <= 500 && selectedContact !== null) { // Si el ancho es menor o igual a 500px y hay un contacto seleccionado, ocultar los contactos
        contacts.style.display = "none";
    } else { // Si el ancho es mayor a 600px o no hay contacto seleccionado, mostrar tanto los contactos como el chat
        contacts.style.display = "block";
        chatContainer.style.display = "block";
    }
}
// Asegúrate de llamar a hideContacts al cargar la página y en cualquier evento de redimensionamiento de la ventana
window.onload = hideContacts; // Llamar a hideContacts al cargar la página
window.onresize = hideContacts;

function toggleContacts() {
    var contacts = document.getElementById("contactos");
    var chatContainer = document.getElementById("chat-container");
    
    if (contacts.style.display === "none" || contacts.style.display === "none") {
        contacts.style.display = "block";
        chatContainer.style.display = "none"
    } else {
        contacts.style.display = "block";
        chatContainer.style.display = "none"
    }
}