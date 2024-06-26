export const button = () => {
  // affichage du boutton pour le bouton +,-,valeur
  return `
    <div class="mt-3 d-flex flex-column  align-items-center">
  <div>
    <button class="btn btn-danger" id="moins" type="button" class="btn">-</button>
      <input id="valeur"  type="number" value="1">
      <button class="btn btn-success" id="plus" type="button" class="btn">+</button>
</div>
      <button class="envoier rounded-pill btn btn-primary">Envoyer</button>
    </div>

  `;
};
