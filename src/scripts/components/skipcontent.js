class SkipContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <a href="#maincontent" class="skip-link">Skip to Content</a>
          `;
  }
}

customElements.define('skipcontent', SkipContent);
