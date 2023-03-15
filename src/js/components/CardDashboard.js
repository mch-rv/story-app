import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class CardDashboard extends LitWithoutShadowDom {
  static properties = {
    content: { type: String, reflect: true },
    description: { type: String, reflect: true },
    classes: { type: String, reflect: true },
  };

  constructor() {
    super();

    this.content = '';
    this.description = '';
    this.classes = '';
  }

  render() {
    return html`
      <div class="card ${this.classes}">
        <div class="card-body d-flex justify-content-between align-items-center">
          <h1 class="card-title fs-2">
            ${this.content}<br />
            <span class="fs-5">${this.description}</span>
          </h1>
          <p class="card-text"></p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"
          >
            <path
              d="M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zm7-14 5 5h-4v5h-2v-5H7l5-5z"
            ></path>
          </svg>
        </div>
      </div>
    `;
  }
}

customElements.define('card-dashboard', CardDashboard);
