export let modal = (
  titre,
  idtitre,
  couleurboutton,
  description,
  idconfirmation
) => {
  return `

<button type="button" class="${couleurboutton}" data-bs-toggle="modal" data-bs-target="#${idtitre}">
${titre}
</button>
<!-- Modal -->
<div class="modal fade" id="${idtitre}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="${idtitre}Label" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="${idtitre}Label">${titre}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      ${description}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        <button type="button" id="${idconfirmation}" data-bs-dismiss="modal" class="${couleurboutton}">${titre}</button>
      </div>
    </div>
  </div>
</div>
      `;
};

{
  /* <button type="button" class="${couleurboutton}" data-bs-toggle="modal" data-bs-target="#${idconfirmation}">
${titre}
</button>
<!-- Modal -->
<div class="modal fade" id="${idconfirmation}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="${titre}Label" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="${titre}Label">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      ${description}
      </div>
      <div class="modal-footer">
        <button type="button" class="${couleurboutton}" data-bs-dismiss="modal">Close</button>
        <button type="button" id="${idconfirmation}" class="btn btn-primary">${titre}</button>
      </div>
    </div>
  </div>
</div> */
}
