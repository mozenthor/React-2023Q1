export function inputDateValidation(date: Date): boolean {
  return date < new Date();
}
