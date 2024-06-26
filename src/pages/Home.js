import { Carousel } from "../components/Carousel";
import images from "../storage/produits.json";
import { categorie } from "../components/categorie";
import categories from "/src/storage/categories.json";
import marques from "/src/storage/marques.json";
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
<a href="/Panier"><i class="fa-solid fa-basket-shopping"></i>  
<!-- affiche le panier -->
<span>${recuperer_quantitetotal_produit()}</span></a>
</p>
    <h1 class="text-center">Accueil</h1>
    ${Carousel(images)}
    ${categorie(categories, marques)}
    
    `;
};
