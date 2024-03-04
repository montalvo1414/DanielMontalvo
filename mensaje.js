var selectedContact = null;

function selecionar(contact) {
    selectedContact = contact;
    var width = window.innerWidth;
    var contacts = document.getElementById("contactos");
    var chatContainer = document.getElementById("chat-container");

    if (width <= 500) { 
        contacts.style.display = "none"; 
        chatContainer.style.display = "block"; 
    } else {
        chatContainer.style.display = "block"
    }
    
    document.getElementById("mensajes").innerHTML = ""; 
}

function enviarmnesaje() {
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

function ocultarcontactos() {
    var width = window.innerWidth;
    var contacts = document.getElementById("contactos");
    var chatContainer = document.getElementById("chat-container");

    if (width <= 500 && selectedContact !== null) { 
        contacts.style.display = "none";
        chatContainer.style.display = "block";
    } else if (width <= 500) { 
        contacts.style.display = "block";
        chatContainer.style.display = "none";
    } else {
        contacts.style.display = "block";
        chatContainer.style.display = "block";
    }
}

window.onload = ocultarcontactos; 
window.onresize = ocultarcontactos;

function toggleContacts() {
    var contacts = document.getElementById("contactos");
    var chatContainer = document.getElementById("chat-container");
    
    if (contacts.style.display === "none" || chatContainer.style.display === "none") {
        contacts.style.display = "block";
        chatContainer.style.display = "none";
    } else {
        contacts.style.display = "none";
        chatContainer.style.display = "block";
    }
}
