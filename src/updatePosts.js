import c from './constants/updatePosts';

function appendChild(parent, el) {
  return parent.appendChild(el);
}

function removeChild(el) {
  return el.parentNode.removeChild(el);
}

function replaceChild(newChild, oldChild) {
  if (!oldChild.parentNode) {
    return;
  }
  return oldChild.parentNode.replaceChild(oldChild, newChild);
}

function pairPostsAndLogs(posts, logs) {
  const pairs = {};
  posts.forEach((post) => {
    pairs[post.id] = {};
    pairs[post.id].post = post;
    pairs[post.id].previousNodes = post.getElementsByClassName(c.POST_CONTAINER);
  });
  for (const log of logs) {
    const id = log.classList[1];
    pairs[id].logs = pairs[id].logs || [];
    pairs[id].logs.push(log);
  }
  return pairs;
}

const updatePosts = (g, doc) => {
  const pairs = pairPostsAndLogs(
    g.posts,
    doc.getElementsByClassName('battlelog'),
  );
  for (const id in pairs) {
    if (!pairs[id].logs) {
      continue;
    }
    const { post, logs, previousNodes } = pairs[id];
    const div = document.createElement('div');
    div.className = c.POST_CONTAINER;
    div.appendChild(document.createElement('hr'));
    logs.reverse().forEach((battleLogPost) => {
      const [_, sprites, uid, interactionType] = battleLogPost.children;
      for (const lineBreak of battleLogPost.getElementsByTagName('BR')) {
        lineBreak.outerHTML = ' ';
      }
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
    if (previousNodes[1]) {
      for (const node of previousNodes) {
        removeChild(node);
      }
    }
    const previousNode = previousNodes[0];
    if (typeof previousNode !== 'undefined' && previousNode !== null) {
      if (div.isEqualNode(previousNode)) {
        continue;
      }
      replaceChild(previousNode, div);
      continue;
    }
    setTimeout(
      () => {
        appendChild(post.lastChild, div);
      }
    , 0);
  }
};

export default updatePosts;
