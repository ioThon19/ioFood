class Drawer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="drawer">
            <p>ioFood</p>
            <ul class="drawer-list">
                <hr>
                <li><a class="drawer-item" href="#/home">Home</a></li>
                <hr>
                <li><a class="drawer-item" href="#/favorite">Favorite</a></li>
                <hr>
                <li class="drawer-item"><a target="_blank" href="https://www.linkedin.com/in/anthonioakbar" rel="noopener">About us</a></li>
                <hr>
            </ul>
        </div>
        `;
  }
}

customElements.define('drawer-component', Drawer);
