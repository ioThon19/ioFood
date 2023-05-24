class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="footer-container" tabindex="0">
        <p>Copyright &#169; 2023 - ioFood</p>
        </div>
        `;
  }
}

customElements.define('footer-element', Footer);
