import { Carousel } from "../components/Carousel";
import images from "../storage/produits.json";

import categories from "/src/storage/categories.json";

/**
 * Page d'accueil
 *
 * @param {HTMLElement} element
 * @returns {void}
 */
export const Home = (element) => {
  element.innerHTML = `
    <h1 class="text-center">Accueil</h1>
    ${Carousel(images, categories)}

    
    `;
};
