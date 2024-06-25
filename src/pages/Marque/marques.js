import { CardsList } from "../../components/CardsList";
import produits from "../../storage/produits.json";
import { produitCard } from "../Produits/Partials/produitCard";
import { recuperer_quantitetotal_produit } from "../../components/Panierquantite";
export const Marque = (element) => {
  element.innerHTML = `
<p class="panier">
<a href="/Panier"><i class="fa-solid fa-basket-shopping"></i>  

<span>${recuperer_quantitetotal_produit()}</span></a>
</p>
      <div class="d-flex justify-content-between">
        <h1>Marque</h1>
      </div>
      <div id="produits-list"></div>
      `;

  const produitsList = element.querySelector("#produits-list");
  const chemin = window.location.pathname;
  console.log(chemin);
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
