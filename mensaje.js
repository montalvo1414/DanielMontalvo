var selectedContact = null;

function selectContact(contact) {
    selectedContact = contact;
    document.getElementById("chat-container").style.display = "block";
    document.getElementById("mensajes").innerHTML = ""; // Clear previous messages
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
    if (width <= 600) { // Verificar si el ancho de la ventana es menor o igual a 600px
        var contacts = document.getElementById("contactos");
        contacts.style.display = "none";
    }
}

function toggleContacts() {
    var contacts = document.getElementById("contactos");
    if (contacts.style.display === "none" || contacts.style.display === "") {
        contacts.style.display = "block";
    } else {
        contacts.style.display = "none";
    }
}
