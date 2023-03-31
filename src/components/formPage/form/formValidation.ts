import { IFormData, IFormValid } from './formPage';

export function formPageValidatoin(currentData: IFormData): IFormValid {
  const validObject: IFormValid = {
    nameValid: inputNameValidation(currentData.inputName),
    dateValid: inputDateValidation(currentData.inputDate),
    cityValid: selectCityValidation(currentData.selectCity),
    radioValid: inputRadioValidation(currentData.inputRadio),
    checkboxValid: inputCheckboxValidation(currentData.inputCheckbox),
    fileValid: inputFileValidation(currentData.inputFile),
  };
  return validObject;
}

function inputCheckboxValidation(value: boolean | undefined): boolean {
  return !!value;
}

function inputDateValidation(date: Date | undefined | string | number): boolean {
  if (date) {
    return new Date(date) < new Date();
  }
  return false;
}
function selectCityValidation(city: string | undefined): boolean {
  if (city) {
    return city.length > 0;
  }
  return false;
}

function inputFileValidation(image: FileList): boolean {
  if (image?.length === 0) {
    return false;
  }
  return image[0].type.includes('image');
}

function inputNameValidation(name: string | undefined): boolean {
  if (name) {
    return name.length > 2 && name.length < 17;
  }
  return false;
}

function inputRadioValidation(value: string | undefined): boolean {
  if (value) {
    return value.length > 0;
  }
  return false;
}
