import { categorieBadge } from "./categorieBadge";

/**
 * @typedef {Object} produit
 * @property {number} id - L'identifiant de l'produit.
 * @property {string} nom - Le nom de l'produit.
 * @property {string} categorie - Le rôle de l'produit.
 */

/**
 * Affiche une ligne d'un tableau d'produits
 *
 * @param {produit} produit
 * @returns {string} HTML string
 */
export const produitRow = (produit) => {
  return `
    <tr>
      <td>${produit.nom}</td>
      <td>${produit.description}</td>
      <td>${categorieBadge(produit.categorie)}</td>
      <td><a class="btn btn-primary btn-sm" href="/produit?id=${
        produit.id
      }"><i class="ri-search-eye-line"></i></a></td>
    </tr>
    `;
};
