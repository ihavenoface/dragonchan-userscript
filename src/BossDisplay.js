const BossDisplay = (doc) => {
  const health = doc.querySelector('.ink-l60');
  if (!health) {
    return;
  }
  const previousNode = document.body.querySelector('.ink-l60');
  if (previousNode) {
    previousNode.parentNode.removeChild(previousNode);
  }
  const { style } = health;
  style.position = 'fixed';
  style.top = '40px';
  style.right = '10px';
  document.body.appendChild(health);
};

export default BossDisplay;
