// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

//création de la fiche article
const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerHTML = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix}€ (${article.prix < 35 ? "€" : "€€€"})`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "Pas de description pour le moment.";
const disponibility = document.createElement("p");
if(article.disponibilite === true){
    disponibility.innerText = "En stock"
}else if(article.disponibilite === false){
    disponibility.innerText = "Rupture de stock"
};
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(disponibility)