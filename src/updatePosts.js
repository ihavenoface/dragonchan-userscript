import c from './constants/updatePosts';

async function appendChild(parent, el) {
  return parent.appendChild(el);
}

function removeChild(el) {
  return el.parentNode.removeChild(el);
}

const updatePosts = (g, doc) => {
  g.posts.forEach((post) => {
    const battleLogPosts = [
      ...doc.getElementsByClassName(`${post.id}`)
    ].reverse();
    if (!battleLogPosts.length) {
      return;
    }
    const div = document.createElement('div');
    div.className = c.POST_CONTAINER;
    div.appendChild(document.createElement('hr'));
    battleLogPosts.forEach((battleLogPost) => {
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
    let previousNode = post.querySelectorAll(c.POST_CONTAINER_SELECTOR);
    if (previousNode[1]) {
      [...previousNode].forEach((node) => {
        removeChild(node);
      });
    }
    previousNode = previousNode[0];
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
