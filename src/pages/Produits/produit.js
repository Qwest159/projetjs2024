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
  // on récupère le produit correspondant à l'identifiant
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
  <div class="d-flex flex-column  align-items-center">
<p class="panier">
<a href="/Panier"><i class="fa-solid fa-basket-shopping"></i>  

<!-- affiche le panier + affiche la quantité d'article -->
<span>${recuperer_quantitetotal_produit()}</span></a>
</p>
    <img src="${produit.image}" class="img-thumbnail  img-fluid" alt="${
    produit.nom
  }">

<h5 class="card-title">${produit.nom}</h5>
<p class="card-text">${produit.description}</p>
<p class="card-text fw-bold"> Prix: ${produit.prix}</p>
 <p class="card-text">${categorieBadge(produit.categorie, produit.marque)}</p>
 <div class="mt-3">
 <label for="valeur">Nombre d'exemplaires que vous souhaitez:</label><br>
 <!-- affiche le button  -->
    ${button()}
    </div>
    `;

  let moins = document.querySelector("#moins");
  let valeur = document.querySelector("#valeur");
  let plus = document.querySelector("#plus");
  // button moins qui diminue la valeur  en cliquant dessus
  moins.addEventListener("click", () => {
    valeur.value = parseFloat(valeur.value) - 1;
  });

  // boutton plus qui augmente la valeur en cliquant dessus
  plus.addEventListener("click", () => {
    valeur.value = parseFloat(valeur.value) + 1;
  });

  // bouton pour envoier la valeur
  let envoier = document.querySelector(".envoier");
  envoier.addEventListener("click", () => {
    const valeur = document.querySelector("#valeur");

    const quantiter = valeur.value;
    if (quantiter) {
      ajouterPanier(produits, quantiter);
    }
    // rafraichissement de la page auto
    return Produit(element);
  });
};

function sauvPanier(panier) {
  localStorage.setItem("panier", JSON.stringify(panier));
}

function recupPanier() {
  //Recupere le localstorage s'il est fourni ou pas
  let panier = localStorage.getItem("panier");
  if (panier == null) {
    return [];
  } else {
    return JSON.parse(panier);
  }
}
// function pour ajouter au local storage la donnée
function ajouterPanier(produit, quantités) {
  let quantiter = parseInt(quantités);
  let panier = recupPanier();

  const url = new URL(window.location.href);
  const produitId = parseInt(url.searchParams.get("id"));
  let produitpush = produit.find((p) => p.id === produitId);

  let trouverproduitpanier = panier.find((p) => p.id === produitId);
  // si le produit se trouve et donc qu'il est pas undefined
  if (trouverproduitpanier != undefined) {
    trouverproduitpanier.quantité += quantiter;
    if (trouverproduitpanier.quantité <= 0) {
      for (let i = 0; i < panier.length; i++) {
        // si la quantiter de produit est en dessous de 0 , supprime le avec splice à l'index ou il se trouve
        if (trouverproduitpanier.id === panier[i].id) {
          panier.splice(i, 1);
        }
      }
    }
    // si le produit est undefined (pas trouver)
  } else if (trouverproduitpanier == undefined) {
    if (quantiter > 0) {
      // creation du format tableau pour le mettre dans la panier grace a push
      let nouveauProduit = {
        id: produitpush.id,
        nom: produitpush.nom,
        quantité: (produitpush.quantité = quantiter),
        prix: produitpush.prix,
      };
      panier.push(nouveauProduit);
    }
  }
  // mettre dans la panier(local storage)
  sauvPanier(panier);
}
