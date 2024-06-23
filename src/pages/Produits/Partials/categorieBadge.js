/**
 * Badge de rôle produit
 *
 * @param {string} categorie
 * @returns {string} HTML string
 */
export const categorieBadge = (categorie) => {
  const categories = {
    arme: "text-bg-danger",
    vêtement: "text-bg-primary",
    accessoire: "text-bg-success",
  };

  const categorieBadge = categories[categorie] || "text-bg-secondary";

  return `
    <span class="badge ${categorieBadge}">${categorie}</span>
    `;
};
