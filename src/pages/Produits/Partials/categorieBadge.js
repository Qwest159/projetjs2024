/**
 * Badge de rôle produit
 *
 * @param {string} categorie
 * @returns {string} HTML string
 */
export const categorieBadge = (categorie, marque) => {
  const categories = {
    arme: "text-bg-secondary",
    vêtement: "text-bg-primary",
    accessoire: "text-bg-success",
  };
  const marques = {
    Bouffondor: "text-bg-danger",
    SerpentRetard: "text-bg-success",
    Serredaigle: "text-bg-info",
    Poufsouflle: "text-bg-warning",
  };

  const categorieBadge = categories[categorie] || "text-bg-secondary";
  const marqueBadge = marques[marque] || "text-bg-secondary";
  return `
  <p>Catégorie:
    <span class="badge ${categorieBadge}">${categorie}</span></p>
     <p>Marque: <span class="badge ${marqueBadge}">${marque}</span></p>
    `;
};
