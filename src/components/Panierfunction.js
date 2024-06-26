function sauvPanier(panier) {
  // mettre dans le local storage
  localStorage.setItem("panier", JSON.stringify(panier));
}

function recupPanier() {
  let panier = localStorage.getItem("panier");
  if (panier == null) {
    return [];
  } else {
    return JSON.parse(panier);
  }
}
// ajoute dans le local storage
function ajouterPanier(produit) {
  let panier = recupPanier();

  const url = new URL(window.location.href);
  const produitId = parseInt(url.searchParams.get("id"));

  let produitpush = produit.find((p) => p.id === produitId);

  console.log(produitpush.nom);

  let trouverproduit = panier.find(() => produitId === produit.id);

  if (trouverproduit != undefined) {
    trouverproduit.quantité++;
  } else {
    produit.quantité = 1;
    panier.push(produitpush);
  }

  sauvPanier(panier);
}

function retirerpanier(produit) {
  let panier = recupPanier();
  panier = panier.filter((p) => p.id != produit.id);
  sauvPanier(panier);
}

function changementquantiter(produit, quantiter) {
  let panier = recupPanier();

  let trouverproduit = panier.find((p) => p.id == produit.id);
  if (trouverproduit != undefined) {
    trouverproduit.quantiter += quantiter;
    if (trouverproduit.quantiter <= 0) {
      retirerpanier(produit);
    } else {
      sauvPanier(panier);
    }
  }
}

function recuperer_prix_produit() {
  let panier = recupPanier();
  let chiffre_produit = 0;
  for (let produit of panier) {
    chiffre_produit += produit.quantiter;
  }
  return chiffre_produit;
}

function recuperer_prixtotal_produit() {
  let panier = recupPanier();
  let total = 0;
  for (let produit of panier) {
    total += produit.quantiter * produit.prix;
  }
  return total;
}
