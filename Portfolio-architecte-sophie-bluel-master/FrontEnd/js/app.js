// Stockage global des œuvres
let allWorks = [];

// Fonction pour récupérer les projets de l’API
async function getWorks() {
  const url = "http://localhost:5678/api/works";

  try {
    const response = await fetch("http://localhost:5678/api/works");
    if (!response.ok) throw new Error(`Erreur API : ${response.status}`);

    allWorks = await response.json();

    // Sélectionne la galerie et vide son contenu
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";

    // Génère les éléments HTML pour chaque projet
    allWorks.forEach(work => {
      const figure = document.createElement("figure");

      figure.innerHTML = `
        <img src="${work.imageUrl}" alt="${work.title}">
        <figcaption>${work.title}</figcaption>
      `;

      gallery.appendChild(figure);
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des projets :", error);
  }
}

// Lancer la récupération des projets dès le chargement
getWorks();

