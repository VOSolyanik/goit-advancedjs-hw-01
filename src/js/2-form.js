const form = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};

try {
  if (localStorage.getItem('feedback-form-state')) {
    formData = JSON.parse(localStorage.getItem('feedback-form-state'));

    for (const key in formData) {
      form.elements[key].value = formData[key];
    }
  }
} catch (error) {
  console.log(error);
}

const inputHandler = event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const submitHandler = event => {
  event.preventDefault();

  const isFormInvalid = Object.values(formData).some(
    value => !value.trim()
  );

  if (isFormInvalid) return alert('Fill please all fields');

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  form.reset();
};

form.addEventListener('input', inputHandler);
form.addEventListener('submit', submitHandler);
