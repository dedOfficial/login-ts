import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { removeInputError, showInputError } from './views/form';

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
function onSubmit() {
  const isFormValid = inputs.every((input) => {
    const isInputValid = validate(input);
    if (!isInputValid) {
      removeInputError(input);
      showInputError(input);
    }
  });

  return isFormValid;
}
