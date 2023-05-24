import 'regenerator-runtime';
import '../styles/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import './components/app-bar';
import './components/banner_hero';
import './components/drawer-component';
import './components/resto-list';
import './components/footer';

const app = new App({
  button: document.querySelector('.hamburger'),
  content: document.querySelector('main'),
  drawer: document.querySelector('.drawer'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
