export let Paniers = (element) => {
  // affichage de mon panier
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
    `;
  recupPanier()
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
        }" type="button" class="btn btn-danger fw-bold supprime">X</button>
          </div>
      </div>
    </div>
          `
    )
    .join("");
};
