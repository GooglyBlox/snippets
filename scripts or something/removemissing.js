// ==UserScript==
// @name         Remove the Missing element
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove the "Missing" element from the current webpage on Canvas when you press backslash. Not automated because its actually useful to know what's missing, but not so nice to see a giant red missing button all the time.
// @author       GooglyBlox_Improved#0001
// @match        https://*.instructure.com/*
// @grant        none
// ==/UserScript==

document.addEventListener('keydown', function(event) {
  if (event.key === '\\') {
    const element = document.querySelector('.dLyYq_bGBk.dLyYq_zGXc');
    if (element) {
      element.remove();
    }
  }
});
