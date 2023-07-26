// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

//création des fiches articles
for(let i = 0; i < pieces.length; i++){
    const article = pieces[i];
    const sectionFiches = document.querySelector(".fiches");

    const pieceElement = document.createElement("article");
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.innerHTML = article.nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix}€ (${article.prix < 35 ? "€" : "€€€"})`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie;
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
    const disponibility = document.createElement("p");
    disponibility.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

    sectionFiches.appendChild(pieceElement);
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(disponibility);
}