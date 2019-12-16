'use strict';

let timeoutID = null;

document.addEventListener('mousemove', (e) => {
  if (timeoutID) {
    clearTimeout(timeoutID);
  }
  timeoutID = setTimeout(() => {
    history.pushState({ isSessionDone: true }, null,
                      `${location.origin}/pages/authorization/login.html`);
    location.assign(`${location.origin}/pages/authorization/login.html`);
  }, 4000);
});