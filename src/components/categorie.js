export const categorie = (categories, marques) => {
  return `
    <h1 class="text-center ">Catégories</h1>
    
        ${categories
          .map(
            (categorie) => `
              <div class="accordion" id="${categorie.nom}">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${categorie.nom}" aria-expanded="true" aria-controls="panelsStayOpen-collapse-${categorie.nom}">
                <h3 class="text-center w-100">${categorie.nom}</h3>
              </button>
            </h2>
            <div id="panelsStayOpen-collapse-${categorie.nom}" class="accordion-collapse collapse ">
              <div class="accordion-body">
                <p class="fs-5 text" >${categorie.description}</p>
                <p class="w-100 text-center  "><a class="text-info  .fs-3 text fw-bold" href="${categorie.chemin}">Cliquez ici pour voir la catégorie ${categorie.nom}</a></p>
              </div>
            </div>
          </div>
            </div>
        `
          )
          .join("")}
    



      
      <h1 class="text-center ">Marques</h1>
  
        ${marques
          .map(
            (marque) => `
                <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${marque.nom}" aria-expanded="true" aria-controls="panelsStayOpen-collapse-${marque.nom}">
                <h3 class="text-center w-100">${marque.nom}</h3>
              </button>
            </h2>
            <div id="panelsStayOpen-collapse-${marque.nom}" class="accordion-collapse collapse">
              <div class="accordion-body">
               <img class="imagecaroussel" src="${marque.image}" alt="${marque.nom}">
                <p class="fs-5 text" >${marque.description}</p>
               
                <p class="w-100 text-center  "><a class="text-info  .fs-3 text fw-bold" href="${marque.chemin}">Cliquez ici pour voir la catégorie ${marque.nom}</a></p>
              </div>
            </div>
          </div>
         </div>
        `
          )
          .join("")}
 
    
      
      
      `;
};
