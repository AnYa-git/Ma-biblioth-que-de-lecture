let form = document.getElementById("ajout-livre");
let submitButton = document.getElementById("ajouter");
let inputTitre = document.getElementById("titre");
let inputAuteur = document.getElementById("auteur");
let listeLivres = document.getElementById("livres");
let scrollTop = document.getElementById("scrollTop");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let titre = inputTitre.value.trim();
  let auteur = inputAuteur.value.trim();

  if (titre !== " " && auteur !== " ") {
    let nouveauLivre = document.createElement("li");
    nouveauLivre.textContent = `${titre} - ${auteur}`;

    listeLivres.appendChild(nouveauLivre);

    inputAuteur.value = "";
    inputTitre.value = "";
  }
});

scrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
