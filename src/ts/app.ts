import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { removeInputError, showInputError } from './views/form';
import { login } from './services/auth.service';
import { notify } from './views/notifications';
import { getNews } from './services/news.service';

const { form, inputEmail, inputPassword } = UI;
const inputs = [inputEmail, inputPassword];

// Events
form.addEventListener('submit', (e) => {
  e.preventDefault();

  onSubmit();
});

inputs.forEach((input) =>
  input.addEventListener('focus', () => removeInputError(input))
);

// Handlers
async function onSubmit() {
  const isFormValid = inputs.every((input) => {
    const isInputValid = validate(input);
    if (!isInputValid) {
      removeInputError(input);
      showInputError(input);
    }
    return isInputValid;
  });

  if (!isFormValid) return;

  try {
    await login(inputEmail.value, inputPassword.value);
    await getNews();
    form.reset();
    notify({ msg: 'Login success', className: 'alert-success' });
  } catch (err) {
    notify({ msg: 'Login failed', className: 'alert-danger' });
  }
}
