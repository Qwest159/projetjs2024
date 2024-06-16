/**
 * TextareaInput Component
 *
 * @param {string} nom
 * @param {string} value
 * @param {string} placeholder
 * @param {number} rows
 * @returns {string} HTML string
 */
export const TextareaInput = (nom, value, placeholder = "", rows = 3) => {
  return `
    <textarea id="${nom}" nom="${nom}" rows="${rows}" class="form-control" placeholder="${placeholder}">${value}</textarea>
    `;
};
