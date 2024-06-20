import "./style.scss";
import "remixicon/fonts/remixicon.css";
import { app } from "./framework/app";

import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
// import { Categorie } from "./pages/Categorie";
import { Produits } from "./pages/Produits/produits";
import { Produit } from "./pages/Produits/produit";
import { Categorie } from "./pages/Categorie/categorie";
import { Panier } from "./pages/Panier";

const routes = {
  "/": Home,
  "/contact": Contact,
  // "/categorie": Categorie,
  "/produit": Produit,
  "/produits": Produits,
  "/Panier": Panier,
  "/Categorie/armes": Categorie,
  "/Categorie/vetements": Categorie,
  "/Categorie/accessoires": Categorie,
};

app("#app", routes);
