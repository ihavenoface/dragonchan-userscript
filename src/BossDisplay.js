import fetchBackend from './fetchBackend';

const BossDisplay = (doc) => {
  const health = doc.querySelector('.ink-l60');
  if (!health) {
    return;
  }
  const previousNode = document.body.querySelector('.ink-l60');
  if (previousNode) {
    previousNode.parentNode.removeChild(previousNode);
  }
  const healthBar = health.querySelector('.health');
  healthBar.addEventListener('click', () => {
    fetchBackend();
  });
  healthBar.style.cursor = 'pointer';
  healthBar.title = 'Refresh player stats';
  const { style } = health;
  style.position = 'fixed';
  style.top = '40px';
  style.right = '10px';
  const sidebar = doc.querySelector('.sidebar');
  sidebar.style.overflowY = 'scroll';
  sidebar.style.height = '330px';
  health.appendChild(sidebar);
  document.body.appendChild(health);
};

export default BossDisplay;
