// import "../../components/Panierfunction";
import produits from "../../storage/produits.json";
import { button } from "../../components/button";
import { categorieBadge } from "./Partials/categorieBadge";

/**
 * Page des détails d'un produit
 *
 * @param {HTMLElement} element
 * @returns {void}
 */
export const Produit = (element) => {
  // on récupère l'identifiant de l'produit depuis l'URL
  const url = new URL(window.location.href);
  const produitId = parseInt(url.searchParams.get("id"));
  // on récupère l'produit correspondant à l'identifiant
  const produit = produits.find((produit) => produit.id === produitId);

  // si l'produit n'existe pas, on affiche un message d'erreur
  if (!produit) {
    element.innerHTML = `
      <h1>produit non trouvé</h1>
      <p>L'produit avec l'identifiant ${produitId} n'existe pas.</p>
      `;
    return;
  }

  element.innerHTML = `
    <img src="${produit.image}" class="img-thumbnail  img-fluid" alt="${
    produit.nom
  }">

<h5 class="card-title">${produit.nom}</h5>
<p class="card-text">${produit.description}</p>
<p class="card-text">${produit.prix}</p>
 <p class="card-text">${categorieBadge(produit.categorie)}</p>
 ${button()}
    `;

  if (!window.location.hash) {
    // Ajoutez un hash à l'URL pour éviter un rafraîchissement en boucle
    window.location.hash = "loaded";
    // Rafraîchir la page
    window.location.reload();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const envoiers = document.getElementById("envoier");
  console.log(envoiers);
  // Ajouter un événement de clic au bouton "Envoyer"
  envoiers.addEventListener("click", () => {
    const valeur = document.querySelector("#valeur");
    // Récupérer la valeur entrée dans l'input
    const quantiter = valeur.value;

    if (quantiter) {
      document.querySelector("#result").textContent = JSON.stringify(
        ajouterPanier(produits, quantiter)
      );
    } else {
      // Afficher un message si aucune valeur n'a été entrée
      document.querySelector("#result").textContent =
        "Veuillez entrer une valeur avant d'envoyer.";
    }
  });
});
// let json = JSON.stringify(produit);
// console.log(json);

// let test = JSON.parse(json);
// console.log(test);

function sauvPanier(panier) {
  localStorage.setItem("panier", JSON.stringify(panier));
}

function recupPanier() {
  let panier = localStorage.getItem("panier");
  if (panier == null) {
    return [];
  } else {
    return JSON.parse(panier);
  }
}

function ajouterPanier(produit, quantiters) {
  let quantiter = parseInt(quantiters);
  let panier = recupPanier();
  const url = new URL(window.location.href);
  const produitId = parseInt(url.searchParams.get("id"));
  //produitpsuh = le produit en question
  let produitpush = produit.find((p) => p.id === produitId);

  let nouveauProduit = {
    id: produitpush.id,
    nom: produitpush.nom,
    quantité: (produitpush.quantité = quantiter),
  };

  let trouverproduitpanier = panier.find((p) => p.id === produitId);

  if (trouverproduitpanier != undefined) {
    trouverproduitpanier.quantité += quantiter;
    if (trouverproduitpanier.quantité < 0) {
      trouverproduitpanier.quantité = 0;
    }
  } else {
    console.log("nope");
    nouveauProduit = {
      id: produitpush.id,
      nom: produitpush.nom,
      quantité: quantiter,
    };

    panier.push(nouveauProduit);
    // console.log(nouveauProduit.quantité);
  }

  console.log(panier[0]);
  sauvPanier(panier);
}

function retirerpanier(produit) {
  let panier = recupPanier();
  panier = panier.filter((p) => p.id != produit.id);
  sauvPanier(panier);
}

function changementquantiter(produit, quantiter) {
  let panier = recupPanier();

  let trouverproduit = panier.find((p) => p.id == produit.id);
  if (trouverproduit != undefined) {
    trouverproduit.quantiter += quantiter;
    if (trouverproduit.quantiter <= 0) {
      retirerpanier(produit);
    } else {
      sauvPanier(panier);
    }
  }
}

function recuperer_prix_produit() {
  let panier = recupPanier();
  let chiffre_produit = 0;
  for (let produit of panier) {
    chiffre_produit += produit.quantiter;
  }
  return chiffre_produit;
}

function recuperer_prixtotal_produit() {
  let panier = recupPanier();
  let total = 0;
  for (let produit of panier) {
    total += produit.quantiter * produit.prix;
  }
  return total;
}

// Sélectionner l'élément input et le bouton
