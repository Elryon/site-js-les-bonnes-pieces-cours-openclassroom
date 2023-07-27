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

//on trie les pièces par prix croissant
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click",function(){
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function(a,b){
        return a.prix-b.prix
    });
});

//on trie les pièces par prix décroissant
const boutonTrierDecroi = document.querySelector(".btn-trierDecroi");
boutonTrierDecroi.addEventListener("click",function(){
    const piecesOrdonneesDecroi = Array.from(pieces);
    piecesOrdonneesDecroi.sort(function(a,b){
        return b.prix-a.prix
    });
});


//on filtre les pièces et enlèvent celles qui coûtent plus de 35€
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function(){
    const piecesFiltrees = pieces.filter(function (piece){
        return piece.prix <= 35
    })
    console.log(piecesFiltrees)
});

//on filtre les pièces et enlèvent celles qui n'ont pas de description
const boutonNoDescription = document.querySelector(".btn-noDescription");
boutonNoDescription.addEventListener("click", function(){
    const piecesDescription = pieces.filter(function (piece){
        return piece.description
    })
    console.log(piecesDescription)
});

//obtention de la liste des noms de pièces dont prix < 35€
const noms = pieces.map(pieces => pieces.nom);
for(let i = pieces.length -1; i >= 0; i--){
    if(pieces[i].prix > 35){
        noms.splice(i,1)
    }
};

//crétion liste des pièces dont prix<35€
const abordablesElements = document.createElement('ul');
for(let i=0; i<noms.length; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement)
};
document.querySelector('.abordables').appendChild(abordablesElements)


//obtention de la liste des pièces disponible et leur prix
const nomsDisponibles = pieces.map(pieces => pieces.nom);
const prixDisponibles = pieces.map(pieces => pieces.prix);
for(let i=pieces.length -1; i>= 0; i--){
    if(pieces[i].disponibilite === false){
        nomsDisponibles.splice(i,1);
        prixDisponibles.splice(i,1);
    }
}


//création de la liste des pièces disponibles et leur prix
const disponibleElement = document.createElement('ul');
for(let i=0; i<nomsDisponibles.length; i++){
    const nomPrixElement = document.createElement('li');
    nomPrixElement.innerText = nomsDisponibles[i] +" - "+ prixDisponibles[i]+"€";
    disponibleElement.appendChild(nomPrixElement);
}
document.querySelector(".disponible").appendChild(disponibleElement)