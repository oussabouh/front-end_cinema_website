function verifierConnexion(event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const btn = document.getElementById("btn-login");
    const message = document.getElementById("login-message");

    message.textContent = "";
    message.className = "form-message";

    const emailValide = "jean@gmail.com";
    const passwordValide = "CineSphere2026";

    if (email !== emailValide) {
        message.textContent = "⚠ L'email fourni n'est pas associé à aucun compte";
        message.classList.add("error");
        
        return;
    }

    if (password !== passwordValide) {
        message.textContent = "⚠ Mot de passe incorrect";
        message.classList.add("error");
        return;
    }


    btn.disabled = true;
    btn.textContent = "Connexion en cours...";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1200);
    
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", verifierConnexion);
});

document.getElementById("login-email").addEventListener("input", () => {
    document.getElementById("login-message").textContent = "";
});

document.getElementById("login-password").addEventListener("input", () => {
    document.getElementById("login-message").textContent = "";
});

