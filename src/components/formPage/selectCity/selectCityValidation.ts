export function selectCityValidation(city: string | undefined): boolean {
  if (city) {
    return city.length > 0;
  }
  return false;
}
