'use strict';

const formElem = document.forms[0];

formElem.onivalid = () => {
  alert('Invalid!');
};

formElem.onsubmit = () => {
  const userFields = ['email', 'password'];

  const user = {};

  for (let prop of userFields) {
    user[prop] = formElem[prop].value;
  }

  localStorage.setItem('user', JSON.stringify(user));

  if (history.state && history.state.isSessionDone) {
    history.back();
  } else {
    location.replace(location.origin);
  }

  return false;
};
