import { CardsList } from "../../components/CardsList";

import produits from "../../storage/produits.json";
import { produitCard } from "./Partials/produitCard";

export const Categorie = (element) => {
  // on récupère le mode d'affichage depuis l'URL
  const url = new URL(window.location.href);

  element.innerHTML = `
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
      (element) => element.categorie === "vetement"
    );
    CardsList(produitsList, vetements, produitCard, ["nom"]);
  } else if (chemin === "/Categorie/accessoire") {
    const accessoires = produits.filter(
      (element) => element.categorie === "accessoire"
    );
    CardsList(produitsList, accessoires, produitCard, ["nom"]);
  }
};
