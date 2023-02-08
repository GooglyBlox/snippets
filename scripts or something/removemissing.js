// ==UserScript==
// @name         Remove the Missing or Late element
// @namespace    https://github.com/GooglyBlox/userscripts/blob/main/scripts%20or%20something/removemissing.js
// @version      0.6
// @description  Remove the "Missing" or "Late" element from the current webpage on Canvas when you press backslash. Not automated because its actually useful to know what's missing, but not so nice to see a giant red missing button all the time.
// @author       GooglyBlox_Improved#0001
// @match        https://*.instructure.com/*
// @grant        none
// ==/UserScript==

document.addEventListener('keydown', function(event) {
  if (event.key === '\\') {
    const element1 = document.querySelector('.dLyYq_bGBk.dLyYq_zGXc');
    if (element1) {
      element1.remove();
    }
  }
});

const checkForElement = setInterval(function() {
  const element2 = document.querySelector('.dLyYq_bGBk.dLyYq_pypk');
  if (element2) {
    element2.remove();
    clearInterval(checkForElement);
  }
}, 100);
