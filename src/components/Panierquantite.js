function recupPanier() {
  let panier = localStorage.getItem("panier");

  let paniers = JSON.parse(panier);
  if (panier == null) {
    return [];
  } else {
    return paniers;
  }
}
// affiche la quantité totals du panier
export function recuperer_quantitetotal_produit() {
  let panier = recupPanier();
  let total = 0;

  for (let i = 0; i < panier.length; i++) {
    total += parseFloat(panier[i].quantité);
  }
  if (total > 999) {
    total = 999;
    total += "+";
  }
  return total;
}
