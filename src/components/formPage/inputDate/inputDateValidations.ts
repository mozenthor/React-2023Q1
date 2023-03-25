export function inputDateValidation(date: Date | undefined | string | number): boolean {
  if (date) {
    return new Date(date) < new Date();
  }
  return false;
}
