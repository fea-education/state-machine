const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;

export function getError(value?: any | null) {
  return re.test(value)
    ? undefined
    : "Has to be at least 8 characters long, contain at least one number and one upper case character!";
}
