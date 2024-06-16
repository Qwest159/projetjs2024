import "./style.scss";
import "remixicon/fonts/remixicon.css";
import { app } from "./framework/app";

import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Produits } from "./pages/Produits/produits";
import { Produit } from "./pages/Produits/produit";
import { accordeontest } from "./pages/accordeon/index";

const routes = {
  "/": Home,
  "/contact": Contact,
  "/utilisateur": Produit,
  "/utilisateurs": Produits,
  "/accordeon": accordeontest,
};

app("#app", routes);
