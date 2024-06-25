import { recuperer_quantitetotal_produit } from "../components/Panierquantite";
import { button } from "../components/button";
import produits from "../storage/produits.json";
import "../pages/Produits/produit";
import { modal } from "../components/modal";
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

<!-- Button trigger modal -->



<p class="panier">
<a href="/Panier"><i class="fa-solid fa-basket-shopping"></i>  

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
       ${recupPanier()
         .map(
           (produit) => `
        <tbody>
            <tr class="fs-5">
                <td >${produit.quantité}

   <div class="mt-3">

    <button class="btn btn-danger" id="moins" type="button" >-</button>
      <input id="valeur"  type="number" value="1">
      <button class="btn btn-success" id="plus" type="button" >+</button><br>

      <button class="${produit.id}" id="envoier">Envoyer</button>
    </div>

                </td>

                <td>${produit.nom}</td>
                <td>${produit.prix}</td>
                <td>${recuperer_prix_produit(produit)} €</td>
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
     `;

  let moins = document.querySelectorAll("#moins");
  let plus = document.querySelectorAll("#plus");

  moins.forEach((buttonsmoins, index) => {
    buttonsmoins.addEventListener("click", () => {
      let valeur = document.querySelectorAll("#valeur")[index];
      console.log(valeur);
      valeur.value = parseFloat(valeur.value) - 1;
    });
  });

  plus.forEach((bouttonsplus, index) => {
    bouttonsplus.addEventListener("click", () => {
      let valeur = document.querySelectorAll("#valeur")[index];
      valeur.value = parseFloat(valeur.value) + 1;
    });
  });

  let boutonsvaleur = document.querySelectorAll("#envoier");
  boutonsvaleur.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log(button);
      let id = button.getAttribute("class");
      let valeur = document.querySelectorAll("#valeur")[index];
      console.log(id);
      ajouterPanier(id, valeur.value);
      return Panier(element);
    });
  });

  const boutonacheterfinal = document.querySelector("#acheter");
  boutonacheterfinal.addEventListener("click", () => {
    alert("Merci pour votre achat");
    localStorage.removeItem("panier");
    return Panier(element);
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

function ajouterPanier(id, quantités) {
  let quantiter = parseInt(quantités);
  let panier = recupPanier();

  let trouverproduitpanier = panier.find((p) => p.id == id);

  console.log(panier);
  console.log(trouverproduitpanier);

  console.log(panier);
  if (trouverproduitpanier != undefined) {
    trouverproduitpanier.quantité += quantiter;
    if (trouverproduitpanier.quantité <= 0) {
      // trouver indice du tableau, ensuite retirer du tableau, ensuite push le tableau+
      for (let i = 0; i < panier.length; i++) {
        if (trouverproduitpanier.id === panier[i].id) {
          panier.splice(i, 1);
        }
      }
    }
  }
  sauvPanier(panier);
}
