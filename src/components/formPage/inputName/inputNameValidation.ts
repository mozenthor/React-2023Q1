export function inputNameValidation(name: string | undefined): boolean {
  if (name) {
    return name.length > 2 && name.length < 17;
  }
  return false;
}
