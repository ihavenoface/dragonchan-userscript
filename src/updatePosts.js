const updatePosts = (g, doc) => {
  const battleLogPosts = [...doc.querySelectorAll('.ink-l70 tbody tr')].reverse();
  g.posts.forEach((post, i) => {
    const postID = post.id.slice(2);
    const previousNode = post.querySelector('.dragonchan');
    if (previousNode) {
      previousNode.parentNode.removeChild(previousNode);
    }
    const div = document.createElement('div');
    div.className = 'dragonchan';
    battleLogPosts.forEach((battleLogPost) => {
      const a = battleLogPost.querySelector('a');
      if (!a) {
        return;
      }
      if (!a.hash.includes(postID)) {
        return;
      }
      const [_, sprites, uid, damage] = battleLogPost.children;
      battleLogPost.querySelectorAll('br').forEach(lineBreak => {
        lineBreak.parentNode.innerHTML = ' ';
      });
      const interaction = document.createElement('blockquote');
      interaction.appendChild(sprites);
      interaction.appendChild(uid);
      interaction.innerHTML += ' ';
      const damageAsSpan = document.createElement('span');
      damageAsSpan.innerHTML = damage.innerHTML;
      interaction.appendChild(damageAsSpan);
      div.appendChild(interaction);
    });
    post.lastChild.appendChild(div);
  });
};

export default updatePosts;
