import { Carousel } from "../components/Carousel";
import images from "../storage/produits.json";

import categories from "/src/storage/categories.json";

import { accordeon } from "/src/pages/accordeon/main";
/**
 * Page d'accueil
 *
 * @param {HTMLElement} element
 * @returns {void}
 */
export const Home = (element) => {
  element.innerHTML = `
    <h1>Accueil</h1>
    ${Carousel(images)}
    ${accordeon}
    
    `;
};
