// import "../../components/Panierfunction";
import produits from "../../storage/produits.json";
import { button } from "../../components/button";
import { categorieBadge } from "./Partials/categorieBadge";
import { recuperer_quantitetotal_produit } from "../../components/Panierquantite";

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
<p class="panier">
<i class="fa-solid fa-basket-shopping"></i>  
<span>${recuperer_quantitetotal_produit()}</span>
</p>
    <img src="${produit.image}" class="img-thumbnail  img-fluid" alt="${
    produit.nom
  }">

<h5 class="card-title">${produit.nom}</h5>
<p class="card-text">${produit.description}</p>
<p class="card-text">${produit.prix}</p>
 <p class="card-text">${categorieBadge(produit.categorie)}</p>
 <div class="mt-3">
 <label for="valeur">Nombre d'exemplaires que vous souhaitez:</label><br>
    ${button()}
    `;

  let moins = document.querySelector("#moins");
  let valeur = document.querySelector("#valeur");
  let plus = document.querySelector("#plus");

  moins.addEventListener("click", () => {
    valeur.value = parseFloat(valeur.value) - 1;
  });
  plus.addEventListener("click", () => {
    valeur.value = parseFloat(valeur.value) + 1;
  });

  let envoier = document.querySelector("#envoier");
  envoier.addEventListener("click", () => {
    const valeur = document.querySelector("#valeur");
    const quantiter = valeur.value;
    if (quantiter) {
      ajouterPanier(produits, quantiter);
    }
    return Produit(element);
  });
};

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

function ajouterPanier(produit, quantités) {
  let quantiter = parseInt(quantités);
  let panier = recupPanier();

  const url = new URL(window.location.href);
  const produitId = parseInt(url.searchParams.get("id"));
  let produitpush = produit.find((p) => p.id === produitId);

  let trouverproduitpanier = panier.find((p) => p.id === produitId);

  // console.log(trouverproduitpanier);

  // console.log(panier);
  if (trouverproduitpanier != undefined) {
    trouverproduitpanier.quantité += quantiter;
    if (trouverproduitpanier.quantité <= 0) {
      // trouver indice du tableau, ensuite retirer du tableau, ensuite push le tableau+
      for (let i = 0; i < panier.length; i++) {
        if (trouverproduitpanier.id === panier[i].id) {
          panier.splice(i, 1);
        }
      }
    }
  } else if (trouverproduitpanier == undefined) {
    if (quantiter > 0) {
      let nouveauProduit = {
        id: produitpush.id,
        nom: produitpush.nom,
        quantité: (produitpush.quantité = quantiter),
        prix: produitpush.prix,
      };
      panier.push(nouveauProduit);
    }
  }
  sauvPanier(panier);
}
