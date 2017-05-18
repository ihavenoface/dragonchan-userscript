import fetchBackend from './fetchBackend';
import c from './constants/BossDisplay';

let container = null;

const initContainer = () => {
  if (container) {
    return;
  }
  container = document.createElement('div');
  container.className = c.CONTAINER;
  document.body.appendChild(container);
};

const BossDisplay = (doc) => {
  initContainer();
  const health = doc.querySelector(c.HEALTH_SELECTOR);
  if (!health) {
    return;
  }
  const sidebar = doc.querySelector(c.SIDEBAR_SELECTOR);
  const healthBar = health.querySelector(c.HEALTHBAR_SELECTOR);
  healthBar.addEventListener('click', fetchBackend);
  healthBar.title = 'Refresh stats';
  health.appendChild(sidebar);
  const previousNode = container.querySelector(c.HEALTH_SELECTOR);
  let scrollPosition = 0;
  if (previousNode) {
    scrollPosition = previousNode.querySelector(c.SIDEBAR_SELECTOR).scrollTop;
    previousNode.parentNode.removeChild(previousNode);
  }
  container.appendChild(health);
  sidebar.scrollTop = scrollPosition;
};

export default BossDisplay;
