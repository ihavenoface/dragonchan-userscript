import c from './constants/updatePosts';

const updatePosts = (g, doc) => {
  const battleLogPosts = [...doc.querySelectorAll('.ink-l70 tbody tr')].reverse();
  g.posts.forEach((post, i) => {
    const postID = post.id.slice(2);
    const previousNode = post.querySelector(c.POST_CONTAINER_SELECTOR);
    const div = document.createElement('div');
    div.className = c.POST_CONTAINER;
    div.appendChild(document.createElement('hr'));
    battleLogPosts.forEach((battleLogPost) => {
      const a = battleLogPost.querySelector('a');
      if (!a) {
        return;
      }
      if (!a.hash.includes(postID)) {
        return;
      }
      const [_, sprites, uid, interactionType] = battleLogPost.children;
      battleLogPost.querySelectorAll('br').forEach(lineBreak => {
        lineBreak.outerHTML = ' ';
      });
      const interaction = document.createElement('blockquote');
      interaction.appendChild(sprites);
      interaction.appendChild(uid);
      interaction.innerHTML += ' ';
      const blankSpaceSpan = document.createElement('span');
      blankSpaceSpan.innerHTML = '&nbsp;';
      interaction.appendChild(blankSpaceSpan);
      const typeAsSpan = document.createElement('span');
      typeAsSpan.innerHTML = interactionType.innerHTML;
      typeAsSpan.className = interactionType.className;
      interaction.appendChild(typeAsSpan);
      div.appendChild(interaction);
    });
    if (previousNode) {
      if (previousNode.innerText === div.innerText) {
        return;
      }
      previousNode.parentNode.removeChild(previousNode);
    }
    post.lastChild.appendChild(div);
  });
};

export default updatePosts;
