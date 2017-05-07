import fetchBackend from './src/fetchBackend';

(function() {
  'use strict';

  fetchBackend();

  const observer = new MutationObserver((mutations) => {
    const foundNode = mutations.some((mutation) => {
      return [...mutation.addedNodes].some((node) => {
        return !node.className.includes('.postContainer');
      });
    });
    if (foundNode) {
      fetchBackend();
    }
  });

  const thread = document.body.querySelector('.thread');

  observer.observe(thread, { childList: true });

}).call(this);
