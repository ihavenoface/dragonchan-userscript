import fetchBackend from './fetchBackend';
import c from './constants/BossDisplay';

const BossDisplay = (doc) => {
  const health = doc.querySelector(c.HEALTH_SELECTOR);
  if (!health) {
    return;
  }
  const sidebar = doc.querySelector(c.SIDEBAR_SELECTOR);
  let scrollPosition = 0;
  const previousNode = document.body.querySelector(c.HEALTH_SELECTOR);
  if (previousNode) {
    scrollPosition = previousNode.querySelector(c.SIDEBAR_SELECTOR).scrollTop;
    previousNode.parentNode.removeChild(previousNode);
  }
  const healthBar = health.querySelector(c.HEALTHBAR_SELECTOR);
  healthBar.addEventListener('click', () => {
    fetchBackend();
  });
  healthBar.style.cursor = 'pointer';
  healthBar.title = 'Refresh stats';
  const { style } = health;
  style.position = 'fixed';
  style.top = '40px';
  style.right = '10px';
  sidebar.style.overflowY = 'scroll';
  sidebar.style.height = '330px';
  health.appendChild(sidebar);
  document.body.appendChild(health);
  sidebar.scrollTop = scrollPosition;
};

export default BossDisplay;
