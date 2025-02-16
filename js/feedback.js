const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.textarea');

form.addEventListener('input', () => {
  const formData = new FormData(form);
  const name = formData.get('name');
  const message = formData.get('message');

  const data = { name, message };

  saveToLS('name', name);
  saveToLS('message', message);
  saveToLS('userData', data);

  //   const name2 = form.elements.name.value;
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name');
  const message = formData.get('message');
  const data = { name, message };

  console.log(data);

  form.reset();

  localStorage.removeItem('name');
  localStorage.removeItem('message');
  localStorage.removeItem('userData');
});

//! ==================================================
function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}

//! ==================================================
/* window.addEventListener('DOMContentLoaded', () => {
  const name = loadFromLS('name');
  const message = loadFromLS('message');

  form.elements.name.value = name || 'Anonymous';
  form.elements.message.value = message;
}); */

window.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS('userData');
  console.log(data);

  form.elements.name.value = data?.name || 'Anonymous';
  form.elements.message.value = data?.message || '';
});
