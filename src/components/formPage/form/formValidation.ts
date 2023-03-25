import { IData } from '../formData/formData';
import { IFormState } from './form';
import { inputCheckboxValidation } from '../inputCheckbox/inputCheckboxValidation';
import { inputDateValidation } from '../inputDate/inputDateValidations';
import { inputFileValidation } from '../inputFile/inputFileValidation';
import { inputNameValidation } from '../inputName/inputNameValidation';
import { inputRadioValidation } from '../inputRadio/inputRadioValidation';
import { selectCityValidation } from '../selectCity/selectCityValidation';

export function formPageValidatoin(currentData: IData): IFormState {
  const validObject: IFormState = {
    nameValid: inputNameValidation(currentData.name),
    dateValid: inputDateValidation(currentData.date),
    cityValid: selectCityValidation(currentData.city),
    radioValid: inputRadioValidation(currentData.radio),
    checkboxValid: inputCheckboxValidation(currentData.checkbox),
    fileRef: inputFileValidation(currentData.image),
  };
  return validObject;
}
