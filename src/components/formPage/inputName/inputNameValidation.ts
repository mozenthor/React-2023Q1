export function inputNameValidation(name: string): boolean {
  return name.length > 2 && name.length < 17;
}
