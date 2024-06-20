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
    <table class="table table-bordered table-striped">
        <thead>
            <tr class="fs-5">
                <th>Quantité</th>
                <th>Nom</th>
                <th>Prix Unitaire</th>
                <th>Prix Total</th>
                <th>Supprimer</th>
            </tr>
        </thead>
       ${recupPanier()
         .map(
           (produit) => `
        <tbody>
            <tr class="fs-5">
                <td>${produit.quantité}</td>
                <td>${produit.nom}</td>
                <td>${produit.prix}</td>
                <td>${recuperer_prix_produit(produit)} €</td>
                <td>
                    <button id="${
                      produit.id
                    }" type="button" class="btn btn-danger fw-bold supprimer">X</button>
                </td>
            </tr>
      `
         )
         .join("")}  
         <tr id="lignetotal">
            <th class="fs-4" colspan="3">Prix Totaux</th>
            <td class="fs-3 fw-bold" colspan="2">${recuperer_prixtotal_produit()} €</td>
        </tr>
        </tbody>
         </table>
         </div>
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

  for (let i = 0; i < panier.length; i++) {
    let chifretotatlparproduit = recuperer_prix_produit(panier[i]);
    console.log(chifretotatlparproduit);
    total += parseFloat(chifretotatlparproduit);
  }
  return total.toFixed(2);
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
