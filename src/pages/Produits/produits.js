import { CardsList } from "../../components/CardsList";
import { DataTable } from "../../components/DataTable";
import produits from "../../storage/produits.json";
import { produitCard } from "./Partials/produitCard";
import { produitRow } from "./Partials/produitRow";
import { recuperer_quantitetotal_produit } from "../../components/Panierquantite";

/**
 * @param {HTMLElement} element
 * @returns {void}
 */
export const Produits = (element) => {
  // on récupère le mode d'affichage depuis l'URL
  const url = new URL(window.location.href);
  const modeFromQueryString = url.searchParams.get("mode");
  let mode = modeFromQueryString || "grid";

  element.innerHTML = `
<p class="panier">
<a href="/Panier"><i class="fa-solid fa-basket-shopping"></i>  
<!-- affiche le panier -->
<span>${recuperer_quantitetotal_produit()}</span></a>
</p>
   
      <h1>Produits</h1>
      <div>
        <button id="grid-mode-btn" class="btn btn-sm btn-secondary mr-3">
          <i class="ri-layout-grid-line"></i>
        </button>
        <button id="table-mode-btn" class="btn btn-sm btn-secondary mr-3">
          <i class="ri-table-line"></i>
        </button>
      </div>
 
    <div id="produits-list"></div>
    `;

  const produitsList = element.querySelector("#produits-list");

  // Fonction pour afficher les produits en fonction du mode d'affichage
  const render = () => {
    if (mode === "grid") {
      CardsList(produitsList, produits, produitCard, [
        // recherche du produit
        "nom",
        "categorie",
        "marque",
      ]);
    } else if (mode === "table") {
      DataTable(
        produitsList,
        produits,
        produitRow,
        // recherche du produit
        ["nom", "categorie", "marque"],
        // le nom des table head
        ["Nom", "Description", "Catégorie", "Detail"]
      );
    }
  };

  // Met à jour le mode dans l'URL
  const putModeInQueryString = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("mode", mode);
    window.history.pushState({}, "", url);
  };

  // Met en surbrillance le mode d'affichage actif
  const markActiveMode = () => {
    if (mode === "grid") {
      tableModeBtn.classList.remove("active");
      gridModeBtn.classList.add("active");
    } else if (mode === "table") {
      gridModeBtn.classList.remove("active");
      tableModeBtn.classList.add("active");
    }
  };

  // Initialisation de la page
  render();

  const gridModeBtn = document.querySelector("#grid-mode-btn");
  const tableModeBtn = document.querySelector("#table-mode-btn");

  markActiveMode();

  // Ajout des écouteurs d'événements sur les boutons de mode d'affichage
  gridModeBtn.addEventListener("click", () => {
    mode = "grid";
    markActiveMode();
    putModeInQueryString();
    render();
  });

  // Ajout des écouteurs d'événements sur les boutons de mode d'affichage
  tableModeBtn.addEventListener("click", () => {
    mode = "table";
    markActiveMode();
    putModeInQueryString();
    render();
  });

  // Ajout d'un écouteur d'événement sur le bouton de retour arrière du navigateur
  window.addEventListener("popstate", () => {
    const url = new URL(window.location.href);
    mode = url.searchParams.get("mode") || "grid";
    render();
    markActiveMode();
  });
};
