function calculerPrix() 
{
    const selectFilm = document.getElementById('movie-select');
    const quantiteInput = document.getElementById('quantity');
    const affichage = document.getElementById('total-price');

    const prix = parseFloat(selectFilm.value);
    const quantite = parseInt(quantiteInput.value);

    // Vérification des données
    if (
        isNaN(prix) ||
        isNaN(quantite) ||
        quantite < 1 ||
        quantite > 10
    ) {
        affichage.textContent = "- - - - -";
        return;
    }

    const total = prix * quantite;
    affichage.textContent = `${total} DH`;
}


function validerReservation(event) 
{
    event.preventDefault();

    const selectFilm = document.getElementById('movie-select');
    const quantite = document.getElementById('quantity').value;

    if (!selectFilm.value || !quantite) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    const btn = document.getElementById("btn-book");

    btn.disabled = true;
    btn.textContent = "Réservation confirmée ✔";
    setTimeout(() => {window.location.href = "index.html";}, 1250);

}


document.addEventListener("DOMContentLoaded", () => {

    const selectFilm = document.getElementById("movie-select");
    const quantiteInput = document.getElementById("quantity");
    const form = document.getElementById("booking-form");

    selectFilm.addEventListener("change", calculerPrix);
    quantiteInput.addEventListener("input", calculerPrix);

    form.addEventListener("submit", validerReservation);
});
