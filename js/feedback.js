const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.textarea');

form.addEventListener('input', () => {
  const formData = new FormData(form);
  const name = formData.get('name');
  const message = formData.get('message');

  //   const name2 = form.elements.name.value;
});
