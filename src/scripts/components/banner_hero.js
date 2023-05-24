// import heroImage from '../../public/images/heros/hero-image_4.jpg';

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero-container" role="banner" aria-label="ioFood">
            <div class="hero-text">
                <h1 id="hero-heading">ioFood</h1>
                <p>"Jenuh, bosan, dan lapar? ke ioFood aja!"</p>
            </div>
            <picture>
            <source media="(max-width: 600px)" srcset="./images/heros/hero-image_4-small.jpg">
              <img src="./images/heros/hero-image_4-large.jpg" alt="Gambar Hero"/>
            </picture>
            </div>
        `;
  }
}

customElements.define('hero-element', HeroElement);
