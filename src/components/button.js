export const button = () => {
  return `
    <div class="mt-3">

    <button class="btn btn-danger" id="moins" type="button" class="btn">-</button>
      <input id="valeur"  type="number" value="1">
      <button class="btn btn-success" id="plus" type="button" class="btn">+</button><br>

      <button id="envoier">Envoyer</button>
    </div>

  `;
};
