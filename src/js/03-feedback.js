import throttle from 'lodash/throttle';
const formRef = document.querySelector('.feedback-form');
const submitRef = formRef.querySelector('[type="submit"]');

setFormFields(getFieldsFromStorage());

formRef.addEventListener('input', throttle(onFormInput, 1000));
submitRef.addEventListener('click', onSubmit);

function setFormFields({ email, message }) {
  formRef.elements.email.value = email;
  formRef.elements.message.value = message;
}

function getFieldsFromStorage() {
  try {
    // return (
    //   JSON.parse(localStorage.getItem('feedback-form-state')) ?? {
    //     email: '',
    //     message: '',
    //   }
    // );
    let result = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (!result) {
      result = {
        email: '',
        message: '',
      };
    }
    return result;
  } catch (error) {
    console.log('Set state error: ', error.message);
    return { email: '', message: '' };
  }
}

function onFormInput() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: formRef.elements.email.value,
      message: formRef.elements.message.value,
    }),
  );
}

function onSubmit() {
  event.preventDefault();
  const formValues = {
    email: formRef.elements.email.value,
    message: formRef.elements.message.value,
  };
  localStorage.removeItem('feedback-form-state');
  formRef.reset();
  console.log(formValues);
  return formValues;
}
