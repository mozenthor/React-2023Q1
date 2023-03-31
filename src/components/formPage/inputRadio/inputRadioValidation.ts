export function inputRadioValidation(value: string | undefined): boolean {
  if (value) {
    return value.length > 0;
  }
  return false;
}
