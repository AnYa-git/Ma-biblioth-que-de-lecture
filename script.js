let form = document.getElementById("ajout-livre");
let inputTitre = document.getElementById("titre");
let inputAuteur = document.getElementById("auteur");
let listeLivres = document.getElementById("livres");
let scrollTop = document.getElementById("scrollTop");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let titre = inputTitre.value.trim();
  let auteur = inputAuteur.value.trim();

  if (titre !== "" && auteur !== "") {
    let nouveauLivre = document.createElement("li");
    nouveauLivre.textContent = `${titre} - ${auteur}`;

    listeLivres.appendChild(nouveauLivre);

    sauvegarderTitre(titre);
    sauvegarderAuteur(auteur);

    inputAuteur.value = "";
    inputTitre.value = "";
  }
});

function sauvegarderTitre(titre, auteur) {
  if (localStorage.length > 0) {
    inputTitre.value = localStorage.getItem("titre");
    inputAuteur.value = localStorage.getItem("auteur");
  }

  localStorage.setItem("titre", inputTitre.value);
  localStorage.setItem("auteur", inputAuteur.value);
}

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
