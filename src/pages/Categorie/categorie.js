import { CardsList } from "../../components/CardsList";
import produits from "../../storage/produits.json";
import { produitCard } from "../Produits/Partials/produitCard";
import { recuperer_quantitetotal_produit } from "../../components/Panierquantite";
export const Categorie = (element) => {
  element.innerHTML = `
  <p class="panier">
<i class="fa-solid fa-basket-shopping"></i>  
<span>${recuperer_quantitetotal_produit()}</span>
</p>
      <div class="d-flex justify-content-between">
        <h1>Produits</h1>
      </div>
      <div id="produits-list"></div>
      `;

  const produitsList = element.querySelector("#produits-list");
  const chemin = window.location.pathname;

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
