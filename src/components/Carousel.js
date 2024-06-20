import { Carousel as BootstrapCarousel } from "bootstrap";
import categories from "/src/storage/categories.json";
/**
 * @typedef {Object} Image
 * @property {string} src - L'URL de l'image.
 * @property {string} title - Le titre de l'image.
 * @property {string} description - La description de l'image.
 */

/**
 * Carousel Component
 *
 * @param {Image[]} images
 * @returns {string} HTML string
 */
export const Carousel = (images) => {
  return `
    <div id="carouselExampleCaptions" class="carousel slide w-50 h-50">
      <div class="carousel-indicators">
        ${images
          .map(
            (image, index) => `
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}" ${
              index === 0 ? 'class="active" aria-current="true"' : ""
            } aria-label="Slide ${index + 1}"></button>
        `
          )
          .join("")}
      </div>
      <div class="carousel-inner">
        ${images
          .map(
            (image, index) => `
          <div class="carousel-item ${index === 0 ? "active" : ""}">
            <img src="${image.image}" class="d-block w-100 " alt="${
              image.description
            }">
            <div class="carousel-caption h-100 fw-bolder">
              <h4 class="text-dark">${image.nom}</h4>
              <p class="text-dark">${image.description}</p>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
      <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon btn btn-dark" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon btn btn-dark"" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    
    <h1>Catégories</h1>


    <div class="accordion w-50" id="accordionPanelsStayOpenExample">
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
