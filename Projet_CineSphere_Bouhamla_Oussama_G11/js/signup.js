function verifierFormulaire(event) {
    event.preventDefault();

    const form = document.getElementById("signup-form");
    const btn = document.getElementById("btn-submit");

    // Vérification HTML5 native
    if (form.checkValidity()) {

        btn.disabled = true;
        btn.textContent = "Compte créé avec succès ✔";

        setTimeout(() => {window.location.href = "index.html";}, 1250);

    } 
    else 
    {
        form.reportValidity(); // affiche les erreurs HTML5
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", verifierFormulaire);
});