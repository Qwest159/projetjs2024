import produits from "../../storage/produits.json";
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
    `;
};
