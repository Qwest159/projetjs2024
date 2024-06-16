/**
 * TextInput Component
 *
 * @param {string} nom
 * @param {string} value
 * @param {string} type
 * @param {string} placeholder
 * @returns {string} HTML string
 */
export const TextInput = (nom, value, type = "text", placeholder = "") => {
  return `
    <input id="${nom}" type="${type}" nom="${nom}" value="${value}" placeholder="${placeholder}" class="form-control">
    `;
};
