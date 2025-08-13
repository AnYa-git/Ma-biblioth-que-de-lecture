let form = document.getElementById("ajout-livre");
let inputTitre = document.getElementById("titre");
let inputAuteur = document.getElementById("auteur");
let listeLivres = document.getElementById("livres");
let scrollTop = document.getElementById("scrollTop");
let effacer = document.getElementById("effacer");
let themeToggle = document.getElementById("theme-toggle");

//CHARGEMENT DES LIVRES SAUVEGARDÉS AU DÉMARRAGE DEPUIS LE LOCALSTORAGE
let livres = JSON.parse(localStorage.getItem("livres")) || [];
livres.forEach((livre) => {
  ajouterLivre(livre.titre, livre.auteur);
});

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("brown-theme");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let titre = inputTitre.value.trim();
  let auteur = inputAuteur.value.trim();

  if (titre !== "" && auteur !== "") {
    ajouterLivre(titre, auteur); // AJOUTER LIVRE DANS LE DOM
    sauvegarderLivre(titre, auteur); // SAUVEGARDER LIVRE DANS LE LOCALSTORAGE

    inputAuteur.value = "";
    inputTitre.value = "";
  }
});

effacer.addEventListener("click", function () {
  listeLivres.textContent = "";
  localStorage.removeItem("livres"); // EFFACER LE LOCALSTORAGE
});

scrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
});

// FONCTION POUR AJOUTER UN LIVRE DANS LE DOM
function ajouterLivre(titre, auteur) {
  let nouveauLivre = document.createElement("li");
  nouveauLivre.textContent = `${titre} - ${auteur}`;

  let btnSupprimer = document.createElement("button");
  btnSupprimer.textContent = "❌";
  btnSupprimer.style.float = "right";
  btnSupprimer.style.backgroundColor = "transparent";
  btnSupprimer.style.border = "none";
  btnSupprimer.style.cursor = "pointer";

  btnSupprimer.addEventListener("click", function () {
    // listeLivres.removeChild(nouveauLivre);
    nouveauLivre.remove();
    supprimerLivre(titre, auteur); // SUPPRIMER LE LIVRE DU LOCALSTORAGE
  });

  nouveauLivre.appendChild(btnSupprimer);
  listeLivres.appendChild(nouveauLivre);
}

// FONCTION POUR SAUVEGARDER LES LIVRES DANS LE LOCALSTORAGE
function sauvegarderLivre(titre, auteur) {
  let livres = JSON.parse(localStorage.getItem("livres")) || [];
  livres.push({ titre: titre, auteur: auteur });
  localStorage.setItem("livres", JSON.stringify(livres));
}

// FONCTION POUR SUPPRIMER UN LIVRE DU LOCALSTORAGE
function supprimerLivre(titre, auteur) {
  let livres = JSON.parse(localStorage.getItem("livres")) || [];
  livres = livres.filter(
    (livre) => livre.titre !== titre || livre.auteur !== auteur
  );
  localStorage.setItem("livres", JSON.stringify(livres));
}
