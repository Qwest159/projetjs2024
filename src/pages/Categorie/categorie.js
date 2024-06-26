import { CardsList } from "../../components/CardsList";
import produits from "../../storage/produits.json";
import categories from "../../storage/categories.json";
import { produitCard } from "../Produits/Partials/produitCard";
import { recuperer_quantitetotal_produit } from "../../components/Panierquantite";
export const Categorie = (element) => {
  // recupere le chemin actuelle
  const chemin = window.location.pathname;
  element.innerHTML = `
<p class="panier">
<a href="/Panier"><i class="fa-solid fa-basket-shopping"></i>  

<span>${recuperer_quantitetotal_produit()}</span></a>
</p>
     
<!-- boucle dans le json(categorie) pour afficher les categories. 
 Le bon chemin pour les bonnes valeurs correspondants -->
      ${categories
        .map(
          (categorie) => `
  ${
    chemin === categorie.chemin
      ? `<h1 class="text-center"> Catégorie: ${categorie.nom}</h1>`
      : ""
  }
        `
        )
        .join("")}
      </div>
      <div id="produits-list"></div>
      `;

  const produitsList = element.querySelector("#produits-list");
  // les chemins correspondant aux valeurs
  if (chemin === "/Categorie/armes") {
    const armes = produits.filter((element) => element.categorie === "arme");
    CardsList(produitsList, armes, produitCard, ["nom"]);
  } else if (chemin === "/Categorie/vetements") {
    const vetements = produits.filter(
      (element) => element.categorie === "vêtement"
    );
    CardsList(produitsList, vetements, produitCard, ["nom"]);
  } else if (chemin === "/Categorie/accessoires") {
    const accessoires = produits.filter(
      (element) => element.categorie === "accessoire"
    );
    CardsList(produitsList, accessoires, produitCard, ["nom"]);
  }
};
