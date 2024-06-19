import categories from "/src/storage/categories.json";

// console.log(categories);
/**
 *
 * @param {HTMLElement} element
 * @returns {void}
 */

export const accordeon = (element) => {
  element.innerHTML = `
    <h1>Catégories</h1>
    <div class="accordion" id="accordionPanelsStayOpenExample">
      ${categories
        .map(
          (categorie) => `
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${categorie.id}" aria-expanded="true" aria-controls="panelsStayOpen-collapse-${categorie.id}">
              <h3>${categorie.nom}</h3>
            </button>
          </h2>
          <div id="panelsStayOpen-collapse-${categorie.id}" class="accordion-collapse collapse show">
            <div class="accordion-body">
              <p class="fs-5 text" >${categorie.description}</p>
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
};
