// Import our custom CSS
import '../scss/main.scss';

// Import components
import './components/index';

// Import javascript file as needed
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';
import Dashboard from './pages/dashboard';
import Add from './pages/stories/add';
import addGuest from './pages/stories/addGuest';
import Login from './pages/auth/login';
import Register from './pages/auth/register';

const routes = {
  '/': Dashboard,
  '/transactions/add.html': Add,
  '/transactions/addGuest.html': addGuest,
  '/auth/login.html': Login,
  '/auth/register.html': Register,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  route.init();
});
