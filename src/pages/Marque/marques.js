import { CardsList } from "../../components/CardsList";
import produits from "../../storage/produits.json";
import marques from "../../storage/marques.json";
import { produitCard } from "../Produits/Partials/produitCard";
import { recuperer_quantitetotal_produit } from "../../components/Panierquantite";
export const Marque = (element) => {
  // recupere le chemin actuelle
  const chemin = window.location.pathname;
  element.innerHTML = `
<p class="panier">
<a href="/Panier"><i class="fa-solid fa-basket-shopping"></i>  
<!-- affiche le panier + affiche la quantité d'article -->
<span>${recuperer_quantitetotal_produit()}</span></a>
</p>
<!-- boucle dans le json(marque) pour afficher les marques. 
 Le bon chemin pour les bonnes valeurs correspondants -->
      ${marques
        .map(
          (marque) => `
  ${chemin === marque.chemin ? `<h1> Marque: ${marque.nom}</h1>` : ""}
        `
        )
        .join("")}

      <div id="produits-list"></div>
      `;

  const produitsList = element.querySelector("#produits-list");

  // les chemins correspondant aux valeurs
  if (chemin === "/Marque/bouffondors") {
    const Bouffondors = produits.filter(
      (element) => element.marque === "Bouffondor"
    );
    CardsList(produitsList, Bouffondors, produitCard, ["nom"]);
  } else if (chemin === "/Marque/serpentRetards") {
    const SerpentRetards = produits.filter(
      (element) => element.marque === "SerpentRetard"
    );
    CardsList(produitsList, SerpentRetards, produitCard, ["nom"]);
  } else if (chemin === "/Marque/serredaigles") {
    const Serredaigles = produits.filter(
      (element) => element.marque === "Serredaigle"
    );
    CardsList(produitsList, Serredaigles, produitCard, ["nom"]);
  } else if (chemin === "/Marque/poufsouflles") {
    const Poufsouflles = produits.filter(
      (element) => element.marque === "Poufsouflle"
    );
    CardsList(produitsList, Poufsouflles, produitCard, ["nom"]);
  }
};
