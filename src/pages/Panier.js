function recupPanier() {
  let panier = localStorage.getItem("panier");

  let paniers = JSON.parse(panier);
  if (panier == null) {
    return [];
  } else {
    return paniers;
  }
}

function sauvPanier(panier) {
  localStorage.setItem("panier", JSON.stringify(panier));
}

export let Panier = (element) => {
  // on définit une constante pour l'événement de mise à jour du compteur
  element.innerHTML = `

<h1>Panier</h1>

<div class="container text-center">
    <div class="row">
      <div class="col"><h2>Quantiter</h2></div>
      <div class="col"><h2>Nom</h2></div>
      <div class="col"><h2>Unité</h2></div>
      <div class="col"><h2>Totaux</h2></div>
      <div class="col"><h2>Supprimer</h2></div>
   
    </div>
  </div>

       ${recupPanier()
         .map(
           (produit) => `

<div class="container text-center ">
  <div class="row">

    <div class="col">
       ${produit.quantité}
    </div>
    <div class="col"> ${produit.nom}</div>
     <div class="col">${produit.prix}</div>
     <div class="col">${recuperer_prix_produit(produit)} €</div>
     <div class="col">
    <button id="${
      produit.id
    }" type="button" class="btn btn-danger fw-bold supprimer">X</button>
      </div>
  </div>
</div>
      `
         )
         .join("")}
     `;
  let boutons = document.querySelectorAll(".supprimer");

  boutons.forEach((button) => {
    button.addEventListener("click", () => {
      let id = button.getAttribute("id");
      supprimerdonnee(recupPanier(), id);
      return Panier(element);
    });
  });
};

function recuperer_prix_produit(produit) {
  let chiffre_produit = 0;

  //conversion de la virgule en point pour que la multiplication fonctione, merci JS :p
  let produitchiffre = produit.prix.replace(",", ".");
  chiffre_produit += parseFloat(produit.quantité) * parseFloat(produitchiffre);
  return chiffre_produit.toFixed(2);
}

function recuperer_prixtotal_produit() {
  let panier = recupPanier();
  let total = 0;
  for (let produit of panier) {
    total += produit.quantiter * produit.prix;
  }

  return total;
}
function supprimerdonnee(panier, ID) {
  let trouverproduitpanier = panier.find((p) => p.id == ID);

  for (let i = 0; i < panier.length; i++) {
    if (trouverproduitpanier.id === panier[i].id) {
      panier.splice(i, 1);
    }
  }
  return sauvPanier(panier);
}
