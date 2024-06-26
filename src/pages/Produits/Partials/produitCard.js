import { categorieBadge } from "./categorieBadge";

/**
 * @typedef {Object} produit
 * @property {number} id - L'identifiant du produit.
 * @property {string} nom - Le nom du produit.
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
        }" class=" img-fluid custom-size " alt="${produit.nom}"></figure>

          <h5 class="card-title">${produit.nom}</h5>
          <p class="card-text descriptions">${produit.description}</p>
           <p class="card-text"> ${categorieBadge(
             produit.categorie,
             produit.marque
           )}</p>
          <p class="card-text">Prix: ${produit.prix}</p>
          
       
          
        </div>
      </a>
    </div>
    `;
};
