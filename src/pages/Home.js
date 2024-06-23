import { Carousel } from "../components/Carousel";
import images from "../storage/produits.json";

import categories from "/src/storage/categories.json";
import { recuperer_quantitetotal_produit } from "../components/Panierquantite";

/**
 * Page d'accueil
 *
 * @param {HTMLElement} element
 * @returns {void}
 */
export const Home = (element) => {
  element.innerHTML = `
 <p class="panier">
<i class="fa-solid fa-basket-shopping"></i>  
<span>${recuperer_quantitetotal_produit()}</span>
</p>
    <h1 class="text-center">Accueil</h1>
    ${Carousel(images, categories)}

    
    `;
};
