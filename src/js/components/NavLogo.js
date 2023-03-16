import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavLogo extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  render() {
    return html`
      <span class="navbar-brand fs-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"
        >
          <path d="M12 9c-1.626 0-3 1.374-3 3s1.374 3 3 3 3-1.374 3-3-1.374-3-3-3z"></path>
          <path
            d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm-8 12c-2.71 0-5-2.29-5-5s2.29-5 5-5 5 2.29 5 5-2.29 5-5 5z"
          ></path></svg
        >${this.brandName}</span
      >
    `;
  }
}

customElements.define('nav-logo', NavLogo);
