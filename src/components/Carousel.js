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
  // affiche les images des produits sur la page acceuil
  return `

  <div class="d-flex p-2 d-flex justify-content-center w-100">
    <div id="carouselExampleCaptions" class=" carousel slide w-50 h-50">
  
      <div class="carousel-inner">
      
        ${images
          .map(
            (image, index) => `
          <div class="carousel-item ${index === 0 ? "active" : ""}">
            <img src="${image.image}" class="d-block w-100 " alt="${
              image.description
            }">
            <div id="bascarousel" class="carousel-caption  fw-bolder">
      <a class=" text-center text-white bg-dark fs-5 fw-bolder " href="/produit?id=${
        image.id
      }">${image.nom}</a>
   
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
        <span class="carousel-control-next-icon btn btn-dark" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </div>
    `;
};
