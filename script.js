let form = document.getElementById("ajout-livre");
let inputTitre = document.getElementById("titre");
let inputAuteur = document.getElementById("auteur");
let listeLivres = document.getElementById("livres");
let scrollTop = document.getElementById("scrollTop");
let effacer = document.getElementById("effacer");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let titre = inputTitre.value.trim();
  let auteur = inputAuteur.value.trim();

  if (titre !== "" && auteur !== "") {
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
    });

    nouveauLivre.appendChild(btnSupprimer);
    listeLivres.appendChild(nouveauLivre);

    inputAuteur.value = "";
    inputTitre.value = "";
  }
});

effacer.addEventListener("click", function () {
  listeLivres.textContent = "";
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
