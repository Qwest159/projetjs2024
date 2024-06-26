import "./style.scss";

import "remixicon/fonts/remixicon.css";
import { app } from "./framework/app";

import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Produits } from "./pages/Produits/produits";
import { Produit } from "./pages/Produits/produit";
import { Categorie } from "./pages/Categorie/categorie";
import { Marque } from "./pages/Marque/marques";
import { Panier } from "./pages/Panier";

const routes = {
  "/": Home,
  "/contact": Contact,
  "/produit": Produit,
  "/produits": Produits,
  "/Panier": Panier,
  // affiche les chemins liés aux catégories
  "/Categorie/armes": Categorie,
  "/Categorie/vetements": Categorie,
  "/Categorie/accessoires": Categorie,
  // affiche les chemins liés aux marques
  "/Marque/bouffondors": Marque,
  "/Marque/serpentRetards": Marque,
  "/Marque/serredaigles": Marque,
  "/Marque/poufsouflles": Marque,
};

app("#app", routes);
