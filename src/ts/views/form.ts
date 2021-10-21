/**
 * Function inputErrorTemplate. Return the markup of the error message.
 * @param {String} msg
 * @returns {String} - template
 */
function inputErrorTemplate(msg: string): string {
  return `
    <div class="invalid-feedback">${msg}</div>
  `;
}

/**
 *  Function showInputError. Add input error.
 * @param {HTMLInputElement} el
 * @returns {Void}
 */
export function showInputError(el: HTMLInputElement) {
  const parent = el.parentElement;

  const msg = el.dataset.invalidMessage || 'Invalid input';

  const template = inputErrorTemplate(msg);

  el.classList.add('is-invalid');

  parent?.insertAdjacentHTML('beforeend', template);
}

/**
 *  Function showInputError. Add input error.
 * @param {HTMLInputElement} el
 * @returns {Void}
 */
export function removeInputError(el: HTMLInputElement) {
  const parent = el.parentElement;
  const err = parent?.querySelector('.invalid-feedback');

  if (!err) return;

  el.classList.remove('is-invalid');

  parent?.removeChild(err);
}
