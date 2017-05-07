// ==UserScript==
// @name         DevLoader dc-userscript
// @namespace    noface
// @version      1.0
// @description  Loads the dragonchan-userscript-bundle from the dev-server
// @author       noface
// @match        *://*/*
// @noframes
// @grant        GM_xmlhttpRequest
// @connect      localhost
// ==/UserScript==

(function() {
  'use strict';

  GM_xmlhttpRequest({
    method: 'GET',
    url: 'http://localhost:8081/bundle.js',
    onload: function(response) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.innerHTML = response.responseText;
      document.getElementsByTagName('body')[0].appendChild(s);
    }
  });
}).call(this);
