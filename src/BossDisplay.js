const appendStyle = () => {
  if (document.getElementById('dragonchan-css')) {
    return;
  }
  const css = document.createElement("style");
  css.id = 'dragonchan-css';
  css.type = "text/css";
  css.innerHTML = '.hp-bar{position:relative;width:500px;font-family:Tahoma;font-size:22px;margin-bottom:30px}.hp-bar .health-remaining-text,.hp-bar .health-total-text{letter-spacing:.1em;font-family:Visitor}.hp-bar .health{float:left;border:1px solid #999;border-radius:4px;width:100%}.hp-bar .health-remaining{float:left;background:#247f00;height:20px}.hp-bar .health-remaining-text{text-align:center;margin-top:10px}.hp-bar .health-total-text{position:absolute;top:25px;right:3px}.hp-bar .health-total{float:left;height:20px}.hp-bar .red{background:#af0000}.hp-bar .orange{background:#ea7900}.hp-bar .yellow{background:#eacc00}.hero{background-color:#EEE;padding:10px;border:2px solid #FEFEFE;border-radius:10px}.ink-row .praise{margin:1.2%;padding:.3%;border:1px solid #EEE;background:#fff;min-height:100px}.ink-row .praise h4{margin-bottom:1em}.ink-label.class-R{background-color:#FF364D;color:#222}.ink-label.class-K{background-color:#C79C6E;color:#222}.ink-label.class-H{background-color:#ABD473;color:#222}.ink-label.class-P{background-color:#FCD349;color:#222}.ink-label.class-B{background-color:#69CCF0;color:#222}.ink-label.class-DK{background-color:#666;color:#eee}.ink-label.class-W{background-color:#9482C9;color:#222}.ink-label.class-DVK{background-color:#000;color:#FFF}.e_earth,.e_electric,.e_fire,.e_ice,.e_normal,.e_water{background-color:#CCC}.ink-label small{font-size:10px;color:#fff}.e_normal{color:#666}.e_water{color:#06e}.e_fire{color:#f20}.e_ice{color:#FFF}.e_earth{color:#960}.e_electric{color:#80F}'
  document.body.appendChild(css);
}

const BossDisplay = (doc) => {
  const health = doc.querySelector('.ink-l60');
  if (!health) {
    return;
  }
  const previousNode = document.body.querySelector('.ink-l60');
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
