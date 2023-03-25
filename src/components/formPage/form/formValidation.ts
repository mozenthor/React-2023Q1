import { inputCheckboxValidation } from '../inputCheckbox/inputCheckboxValidation';
import { inputDateValidation } from '../inputDate/inputDateValidations';
import { inputFileValidation } from '../inputFile/inputFileValidation';
import { inputNameValidation } from '../inputName/inputNameValidation';
import { inputRadioValidation } from '../inputRadio/inputRadioValidation';
import { selectCityValidation } from '../selectCity/selectCityValidation';
import { IFormData, IFormValid } from './formPage';

export function formPageValidatoin(currentData: IFormData): IFormValid {
  const validObject: IFormValid = {
    nameValid: inputNameValidation(currentData.name),
    dateValid: inputDateValidation(currentData.date),
    cityValid: selectCityValidation(currentData.city),
    radioValid: inputRadioValidation(currentData.radio),
    checkboxValid: inputCheckboxValidation(currentData.checkbox),
    fileRef: inputFileValidation(currentData.image),
  };
  return validObject;
}
