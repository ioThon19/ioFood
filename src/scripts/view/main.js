import '../components/menu-list';
import '../components/app-bar';
import '../components/banner_hero';
import '../components/drawer-component';
import data from '../../DATA.json';

function main() {
  const menuListElement = document.querySelector('menu-list');
  menuListElement.menu = data.restaurants;

  function initAppShell({ button, drawer, content }) {
    const drawerComponent = document.querySelector('drawer-component');

    if (button) {
      button.addEventListener('click', (event) => {
        drawerComponent._toggleDrawer(event, drawer);
      });
    }

    if (content) {
      content.addEventListener('click', (event) => {
        drawerComponent._closeDrawer(event, drawer);
      });
    }
  }

  initAppShell({
    button: document.querySelector('.hamburger'),
    content: document.querySelector('body'),
    drawer: document.querySelector('.drawer'),
  });
}

export default main;
