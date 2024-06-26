import { ROUTE_CHANGED_EVENT } from "../framework/app";

/**
 * @typedef {Object} Link
 * @property {string} href - L'URL du lien.
 * @property {string} text - Le texte du lien.
 */

/**
 * @param {HTMLElement} element
 * @returns {void}
 */
export const Nav = (element) => {
  let appnom = "Un tour de magie";
  // appnom += panierquantite();
  /**
   * @type {Link[]}
   */
  const links = [
    { href: "/", text: "Accueil" },
    { href: "/contact", text: "Contact" },
    { href: "/produits", text: "Produits" },
    { href: "/Panier", text: "Panier" },
    // { href: "/Panier", text: panierquantite() },
  ];

  const linkscategories = [
    { href: "/Categorie/armes", text: "Armes" },
    { href: "/Categorie/vetements", text: "Vêtements" },
    { href: "/Categorie/accessoires", text: "Accessoires" },
  ];

  const linksmarques = [
    { href: "/Marque/bouffondors", text: "Bouffondor" },
    { href: "/Marque/serpentRetards", text: "SerpentRetard" },
    { href: "/Marque/serredaigles", text: "Serredaigle" },
    { href: "/Marque/poufsouflles", text: "Poufsouflle" },
  ];
  // { href: "/categorie", text: "Categories" },
  element.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">${appnom}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            ${links
              .map(
                (link) => `
                <li class="nav-item">
                  <a class="nav-link" href="${link.href}">${link.text}</a>
                </li>
                `
              )
              .join("")}
          </ul>
          
          <div class="dropdown">
          <button class="dropdown-toggle buttondrop" type="button" data-bs-toggle="dropdown" aria-expanded="false">Catégories</button>
  <ul class="dropdown-menu">
  ${linkscategories
    .map(
      (link) => `
                <li class="nav-item">
                  <a class="nav-link" href="${link.href}">${link.text}</a>
                </li>
                `
    )
    .join("")}
</ul>
        </div>
        <div class="dropdown">
          <button class="dropdown-toggle buttondrop" type="button" data-bs-toggle="dropdown" aria-expanded="false">Marques</button>
  <ul class="dropdown-menu">
  ${linksmarques
    .map(
      (link) => `
                <li class="nav-item">
                  <a class="nav-link" href="${link.href}">${link.text}</a>
                </li>
                `
    )
    .join("")}
</ul>
        </div>
      </div>
    </nav>
    `;

  // Remplace les liens par des événements de navigation
  const replaceLinksByEvents = () => {
    const navLinks = element.querySelectorAll("a");

    const linkClickHandler = (event) => {
      // Empêche la navigation par défaut
      event.preventDefault();
      // Modifie l'URL de la page sans recharger la page
      window.history.pushState({}, "", event.target.href);
      // Déclenche l'événement route-changed pour changer de page sans recharger la page
      element.dispatchEvent(new CustomEvent(ROUTE_CHANGED_EVENT));

      removeActive();
      markAsActive();
      changePageTitle();
    };

    // Ajoute un écouteur d'événement sur chaque lien de navigation
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", linkClickHandler);
    }
  };

  // Supprime la classe active des liens de navigation
  const removeActive = () => {
    const activeLink = element.querySelector("a.active");
    if (activeLink) {
      activeLink.classList.remove("active");
    }
  };

  // Ajoute la classe active au lien de navigation correspondant à l'URL de la page courante
  const markAsActive = () => {
    const activeLink = element.querySelector(
      `a.nav-link[href="${window.location.pathname}"]`
    );
    if (!activeLink) {
      return;
    }
    activeLink.classList.add("active");
  };

  // Modifie le titre de la page en fonction du lien de navigation actif
  const changePageTitle = () => {
    const activeLink = element.querySelector("a.active");

    // Si la page courante n'est pas une page de navigation, on affiche uniquement le nom de l'application
    if (!activeLink) {
      document.title = appnom;
      return;
    }

    document.title = `${activeLink.textContent} - ${appnom}`;
  };

  // Initialise la barre de navigation
  markAsActive();
  replaceLinksByEvents();
  changePageTitle();

  // Ajoute un écouteur d'événement pour gérer les événements de navigation du navigateur (précédent/suivant)
  window.addEventListener("popstate", () => {
    removeActive();
    markAsActive();
    changePageTitle();
    element.dispatchEvent(new CustomEvent(ROUTE_CHANGED_EVENT));
  });
};
