export const button = () => {
  return `
    <div class="mt-3">
    <label for="valeur">Entrez le chiffre que vous souhaitez:</label><br>
      <input type="number" id="valeur" value="1">
      
      <button id="envoier">Envoyer</button>
    </div>
    <p id="result"></p>
  `;
};
