import { RoleBadge } from "./RoleBadge";

/**
 * @typedef {Object} produit
 * @property {number} id - L'identifiant du produit.
 * @property {string} Nom - Le nom du produit.
 * @property {string} description - Description du produit.
 * @property {img} image - L'image du produit.
 * @property {number} prix - Le prix du produit
 * @property {string} categorie - La categorie du produit

/**
 * Affiche une carte du produit
 *
 * @param {produit} produit
 * @returns {string} HTML string
 */
export const produitCard = (produit) => {
  return `
    <div class="col p-2 ">
      <a class="card produit-link" href="/produit?id=${produit.id}">
        <div class="card-body">
        
        
        <figure class="figure"><img src="${
          produit.image
        }" class=" img-fluid custom-size " alt="${produit.Nom}"></figure>

          <h5 class="card-title">${produit.Nom}</h5>
          <p class="card-text">${produit.description}</p>
          <p class="card-text">${produit.prix}</p>
           <p class="card-text">${produit.categorie}</p>
           <p class="card-text"> ${RoleBadge(produit.role)}</p>
          
        </div>
      </a>
    </div>
    `;
};
