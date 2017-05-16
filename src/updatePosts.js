import c from './constants/updatePosts';

async function appendChild(parent, el) {
  return parent.appendChild(el);
}

async function removeChild(el) {
  return el.parentNode.removeChild(el);
}

const updatePosts = (g, doc) => {
  g.posts.forEach((post) => {
    const postID = post.id.slice(2);
    const battleLogPosts = [...doc.querySelectorAll(`.ink-l70 a[href$='#p${postID}']`)].reverse();
    if (!battleLogPosts.length) {
      return;
    }
    const previousNode = post.querySelector(c.POST_CONTAINER_SELECTOR);
    const div = document.createElement('div');
    div.className = c.POST_CONTAINER;
    div.appendChild(document.createElement('hr'));
    battleLogPosts.forEach((battleLogPost) => {
      battleLogPost = battleLogPost.parentNode.parentNode;
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
      removeChild(previousNode);
    }
    appendChild(post.lastChild, div);
  });
};

export default updatePosts;
