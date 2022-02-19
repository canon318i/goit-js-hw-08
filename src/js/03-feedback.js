import throttle from 'lodash/throttle';
const LOCAL_STORAGE_ITEM_NAME = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');

setFormFields(getFieldsFromStorage());

formRef.addEventListener('input', throttle(onFormInput, 1000));
formRef.addEventListener('submit', onSubmit);

function setFormFields({ email, message }) {
  formRef.elements.email.value = email;
  formRef.elements.message.value = message;
}

function getFieldsFromStorage() {
  try {
    //the follownig code was replaced to IF due to strange build error:
    // /home/runner/work/goit-js-hw-08/goit-js-hw-08/src/js/03-feedback.js: Unexpected token: operator (?)
    //
    // return (
    //   JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM_NAME)) ?? {
    //     email: '',
    //     message: '',
    //   }
    // );
    let result = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM_NAME));
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
    LOCAL_STORAGE_ITEM_NAME,
    JSON.stringify({
      email: formRef.elements.email.value,
      message: formRef.elements.message.value,
    }),
  );
}

function onSubmit(event) {
  event.preventDefault();
  const formValues = {
    email: formRef.elements.email.value,
    message: formRef.elements.message.value,
  };
  if (!(formValues.email && formValues.message)) {
    return alert('Empty fields are not allowed!!!');
  }
  localStorage.removeItem(LOCAL_STORAGE_ITEM_NAME);
  event.currentTarget.reset();
  console.log(formValues);
  return formValues;
}
