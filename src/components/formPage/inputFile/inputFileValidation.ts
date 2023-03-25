export function inputFileValidation(image: File | undefined | null): boolean {
  if (image) {
    return image.type.includes('image');
  }
  return false;
}
