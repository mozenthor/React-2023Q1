import React from 'react';
import { currentData, data } from './formData/formData';
import { formPageValidatoin } from './formPageValidation';
import InputCheckbox from './inputCheckbox/inputCheckbox';
import InputDate from './inputDate/inputDate';
import InputFile from './inputFile/inputFile';
import InputName from './inputName/inputName';
import InputRadio from './inputRadio/inputRadio';
import SelectCity from './selectCity/selectCity';

class FormPage extends React.Component<object> {
  formRef: React.RefObject<HTMLFormElement>;
  state: IFormState;
  constructor(props: object) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      nameValid: true,
      dateValid: true,
      cityValid: true,
      radioValid: true,
      checkboxValid: true,
    };
  }

  sendCurrentData = () => {
    currentData.name = this.formRef.current?.inputName.value;
    currentData.date = this.formRef.current?.inputDate.value;
    currentData.city = this.formRef.current?.selectCity.value;
    currentData.radio = this.formRef.current?.inputRadio.value;
    currentData.checkbox = this.formRef.current?.inputCheckbox.checked;
  };

  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.sendCurrentData();
    this.setState(formPageValidatoin(currentData));
    if (Object.values(this.state).indexOf(false) != -1) {
      data.push(currentData);
      this.formRef.current?.reset();
    }
    console.log(this.formRef.current?.inputFile.value);
  };

  render() {
    return (
      <div>
        <form ref={this.formRef} onSubmit={this.onSubmit}>
          <InputName valid={this.state.nameValid} />
          <InputDate valid={this.state.dateValid} />
          <SelectCity valid={this.state.cityValid} />
          <InputRadio valid={this.state.radioValid} />
          <InputCheckbox valid={this.state.checkboxValid} />
          <InputFile valid={this.state.radioValid} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export interface IFormState {
  nameValid: boolean;
  dateValid: boolean;
  cityValid: boolean;
  radioValid: boolean;
  checkboxValid: boolean;
}

export default FormPage;
