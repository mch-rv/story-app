import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class ModalTransaction extends LitWithoutShadowDom {
  static properties = {
    title: { type: String, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">${this.title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div class="modal-body">
            <div class="mb-3">
              <img src="" id="imgDetailStory" class="img-fluid" alt="${this.title}" />
            </div>

            <table>
              <tbody>
                <tr>
                  <td class="fw-bold">${msg(`Nama`)}</td>
                  <td class="fw-bold ms-3 me-1 d-inline-block">:</td>
                  <td id="nameDetailStory"></td>
                </tr>
                <tr>
                  <td class="fw-bold">${msg(`Deskripsi`)}</td>
                  <td class="fw-bold ms-3 me-1 d-inline-block">:</td>
                  <td id="noteDetailStory"></td>
                </tr>
                <tr>
                  <td class="fw-bold">${msg(`Tanggal`)}</td>
                  <td class="fw-bold ms-3 me-1 d-inline-block">:</td>
                  <td id="dateDetailStory"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              ${msg(`Tutup`)}
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('modal-transaction', ModalTransaction);
