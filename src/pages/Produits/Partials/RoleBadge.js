/**
 * Badge de rôle produit
 *
 * @param {string} role
 * @returns {string} HTML string
 */
export const RoleBadge = (role) => {
  const roles = {
    arme: "text-bg-danger",
    vetement: "text-bg-primary",
    accessoire: "text-bh-success",
  };

  const roleBadge = roles[role] || "text-bg-secondary";

  return `
    <span class="badge ${roleBadge}">${role}</span>
    `;
};
