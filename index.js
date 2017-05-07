import BossDisplay from './src/BossDisplay';
import updatePosts from './src/updatePosts';

(function() {
  'use strict';

  const g = {};

  g.posts = [...document.querySelectorAll('.thread > .postContainer')];
  g.OP = g.posts.splice(0, 1)[0];

  fetch(`http://drgchan.ddns.net/${g.OP.id.slice(2)}`)
    .then(res => res.text())
    .then(res => {
      const parser = new DOMParser();
      res = res.replace(/images\/sprites\/rpg/gi, 'http://drgchan.ddns.net/images/sprites/rpg');
      const doc = parser.parseFromString(res, 'text/html');
      BossDisplay(doc);
      updatePosts(g, doc);
    });
}).call(this);
