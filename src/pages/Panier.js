import { recuperer_quantitetotal_produit } from "../components/Panierquantite";
import "../pages/Produits/produit";
import { modal } from "../components/modal";

function recupPanier() {
  //Recupere le localstorage s'il est fourni ou pas
  let panier = localStorage.getItem("panier");
  let paniers = JSON.parse(panier);
  if (panier == null) {
    return [];
  } else {
    return paniers;
  }
}

function sauvPanier(panier) {
  // mettre dans le local storage
  localStorage.setItem("panier", JSON.stringify(panier));
}

export let Panier = (element) => {
  element.innerHTML = `

<p class="panier">
<a href="/Panier"><i class="fa-solid fa-basket-shopping"></i>  
<!-- affiche le panier + affiche la quantité d'article -->
<span>${recuperer_quantitetotal_produit()}</span></a>
</p>

<h1>Panier</h1>


<div class="container text-center">
    <table class="table  table-striped">
        <thead class="">
            <tr class="fs-5 sticky">
                <th>Quantité</th>
                <th>Nom</th>
                <th>Prix Unitaire</th>
                <th>Prix Total</th>
                <th>Supprimer</th>
            </tr>
        </thead>
        <!-- boucle dans le json de produit -->
       ${recupPanier()
         .map(
           (produit) => `
        <tbody>
            <tr class="fs-5">
                <td >${produit.quantité}

   <div class="mt-3">

    <button class="btn btn-danger fw-bolder" id="moins" type="button" >-</button>
      <input  class="valeur " type="number" value="1">
      <button class="btn btn-success" id="plus" type="button" >+</button><br>

      <button class="envoier rounded-pill btn btn-primary" id="${
        produit.id
      }">Envoyer</button>
    </div>

                </td>
                <td>${produit.nom}</td>
                <td class="fw-bold">${produit.prix}</td>
                
                <td class="fw-bold">${recuperer_prix_produit(produit)} €</td>
                <td>
                    <button id="${
                      produit.id
                    }" type="button" class="btn btn-danger fw-bold supprimer">X</button>
                </td>
            </tr>
             </tbody>
      `
         )
         .join("")}  
         <thead>
         <tr id="lignetotal">
            <th class="fs-4" colspan="3">Prix Total des articles</th>
            <td class="fs-3 fw-bold" colspan="2">${recuperer_prixtotal_produit()} €</td>
        </tr>
        </thead>
         </table>
         </div>
         <div class="d-flex justify-content-between m-3">
          <!-- modal pour la confirmation de l'utilisateur -->
         ${modal(
           "Supprimer tout",
           "supprimertout1",
           "btn btn-danger",
           "Vous êtes sur le point de supprimer toute la liste de votre panier.",
           "supprimertous"
         )}
        
         ${modal(
           "Acheter",
           "acheter1",
           "btn btn-success",
           "Vous êtes sur le point de finaliser votre panier",
           "acheter"
         )}
         </div>
     `;

  // recupere les boutons
  let moins = document.querySelectorAll("#moins");
  let plus = document.querySelectorAll("#plus");

  //boucle dans les boutons et on rajoute la valeur
  moins.forEach((buttonsmoins, index) => {
    buttonsmoins.addEventListener("click", () => {
      let valeur = document.querySelectorAll(".valeur")[index];
      valeur.value = parseFloat(valeur.value) - 1;
    });
  });
  //boucle dans les boutons et on rajoute la valeur
  plus.forEach((bouttonsplus, index) => {
    bouttonsplus.addEventListener("click", () => {
      let valeur = document.querySelectorAll(".valeur")[index];
      valeur.value = parseFloat(valeur.value) + 1;
    });
  });
  //boucle dans les boutons et on rajoute les valeurs dans le panier
  let boutonsvaleur = document.querySelectorAll(".envoier");
  boutonsvaleur.forEach((button, index) => {
    button.addEventListener("click", () => {
      let id = button.getAttribute("id");
      let valeur = document.querySelectorAll(".valeur")[index];
      ajouterPanier(id, valeur.value);
      return Panier(element);
    });
  });
  // -------ACHETER FINAL------
  const boutonacheterfinal = document.querySelector("#acheter");
  boutonacheterfinal.addEventListener("click", () => {
    if (recuperer_prixtotal_produit() > "1") {
      alert("Merci pour votre achat");
      localStorage.removeItem("panier");
      return Panier(element);
    }
  });
  // -----------SUPPRIMER TOUS------------
  const boutonsupptouts = document.querySelector("#supprimertous");
  boutonsupptouts.addEventListener("click", () => {
    localStorage.removeItem("panier");
    return Panier(element);
  });

  // ------SUPPRIMER LA DONNEE DU PANIER-------
  let boutons = document.querySelectorAll(".supprimer");
  boutons.forEach((button) => {
    button.addEventListener("click", () => {
      let id = button.getAttribute("id");
      supprimerdonnee(recupPanier(), id);
      return Panier(element);
    });
  });
};

//multiplie la quantité de produit en fonction du prix
function recuperer_prix_produit(produit) {
  let chiffre_produit = 0;

  //conversion de la virgule en point pour que la multiplication fonctionne, merci JS :p
  let produitchiffre = produit.prix.replace(",", ".");
  chiffre_produit += parseFloat(produit.quantité) * parseFloat(produitchiffre);
  return chiffre_produit.toFixed(2);
}

//boucle dans les prix des produits pour obtenir le prix final
function recuperer_prixtotal_produit() {
  let panier = recupPanier();
  let total = 0;

  for (let i = 0; i < panier.length; i++) {
    let chifretotatlparproduit = recuperer_prix_produit(panier[i]);
    total += parseFloat(chifretotatlparproduit);
  }
  return total.toFixed(2);
}
// function pour supprimer la donnée
function supprimerdonnee(panier, ID) {
  let trouverproduitpanier = panier.find((p) => p.id == ID);

  for (let i = 0; i < panier.length; i++) {
    if (trouverproduitpanier.id === panier[i].id) {
      panier.splice(i, 1);
    }
  }
  return sauvPanier(panier);
}
// function pour ajouter au local storage la donnée
function ajouterPanier(id, quantités) {
  let quantiter = parseInt(quantités);
  let panier = recupPanier();

  let trouverproduitpanier = panier.find((p) => p.id == id);
  // si le produit se trouve et donc qu'il est pas undefined
  if (trouverproduitpanier != undefined) {
    trouverproduitpanier.quantité += quantiter;
    // si la quantiter de produit est en dessous de 0 , supprime le avec splice à l'index ou il se trouve
    if (trouverproduitpanier.quantité <= 0) {
      for (let i = 0; i < panier.length; i++) {
        if (trouverproduitpanier.id === panier[i].id) {
          panier.splice(i, 1);
        }
      }
    }
  }
  // mettre dans la panier(local storage)
  sauvPanier(panier);
}
