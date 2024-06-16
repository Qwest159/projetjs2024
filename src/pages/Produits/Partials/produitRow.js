import { RoleBadge } from "./RoleBadge";

/**
 * @typedef {Object} produit
 * @property {number} id - L'identifiant de l'produit.
 * @property {string} name - Le nom de l'produit.
 * @property {string} email - L'adresse email de l'produit.
 * @property {string} role - Le rôle de l'produit.
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
      <td>${produit.Nom}</td>
      <td>${produit.description}</td>
      <td>${RoleBadge(produit.categorie)}</td>
      <td><a class="btn btn-primary btn-sm" href="/produit?id=${
        produit.id
      }"><i class="ri-search-eye-line"></i></a></td>
    </tr>
    `;
};
