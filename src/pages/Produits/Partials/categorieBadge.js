/**
 * Badge de rôle produit
 *
 * @param {string} categorie
 * @returns {string} HTML string
 */
export const categorieBadge = (categorie) => {
  const categories = {
    arme: "text-bg-danger",
    vetement: "text-bg-primary",
    accessoire: "text-bh-success",
  };

  const categorieBadge = categories[categorie] || "text-bg-secondary";

  return `
    <span class="badge ${categorieBadge}">${categorie}</span>
    `;
};
