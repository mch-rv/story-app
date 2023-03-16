import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class FooterApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <p class="text-center text-white mb-0">${msg(`Dibuat dengan ❤ oleh Mochammad Ravly`)}</p>
    `;
  }
}

customElements.define('footer-app', FooterApp);
