import BossDisplay from './BossDisplay';
import updatePosts from './updatePosts';

const fetchBackend = () => {
  const g = {};
  const host = 'https://dragonchan.duckdns.org';

  g.posts = Array.prototype.slice.call(
    document.getElementsByClassName('thread')[0]
      .getElementsByClassName('postContainer'),
  );
  g.OP = g.posts.splice(0, 1)[0];

  fetch(`${host}/${g.OP.id.slice(2)}`)
    .then(res => res.text())
    .then(res => {
      const parser = new DOMParser();
      res = res.replace(/images\/sprites\/rpg/gi, `${host}/images/sprites/rpg`);
      const doc = parser.parseFromString(res, 'text/html');
      BossDisplay(doc);
      updatePosts(g, doc);
    });
};

export default fetchBackend;
