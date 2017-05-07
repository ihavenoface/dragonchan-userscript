const appendStyle = () => {
  const css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = '.hp-bar{position:relative;width:500px;font-family:Tahoma;font-size:22px;margin-bottom:30px}.hp-bar .health-remaining-text,.hp-bar .health-total-text{letter-spacing:.1em;font-family:Visitor}.hp-bar .health{float:left;border:1px solid #999;border-radius:4px;width:100%}.hp-bar .health-remaining{float:left;background:#247f00;height:20px}.hp-bar .health-remaining-text{text-align:center;margin-top:10px}.hp-bar .health-total-text{position:absolute;top:25px;right:3px}.hp-bar .health-total{float:left;height:20px}.hp-bar .red{background:#af0000}.hp-bar .orange{background:#ea7900}.hp-bar .yellow{background:#eacc00}';
  document.body.appendChild(css);
}

const BossDisplay = (doc) => {
  const health = doc.querySelector('.ink-l60 .hp-bar');
  if (!health) {
    return;
  }
  const previousNode = document.body.querySelector('.hp-bar');
  if (previousNode) {
    previousNode.parentNode.removeChild(previousNode);
  }
  appendStyle();
  const { style } = health;
  style.position = 'fixed';
  style.top = '40px';
  style.right = '10px';
  document.body.appendChild(health);
};

export default BossDisplay;
