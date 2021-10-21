const regExpDic = {
  email:
    /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
  password: /^[0-9a-zA-Z]{4,}$/,
};

/**
 * Function validate. Check Input on RegExp provided in regExpDic by input data-required type
 * @param {HTMLInputElement} el
 * @return {Boolean} - Return true if input is valid or doesn't has data-required attr
 */
export function validate(el: HTMLInputElement): boolean {
  const regExpName = el.dataset.required;

  if (!regExpDic[<string>regExpName]) return true;

  return regExpDic[<string>regExpName].test(el.value);
}
