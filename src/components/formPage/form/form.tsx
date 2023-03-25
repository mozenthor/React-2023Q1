import React from 'react';
import { currentData, data } from '../formData/formData';
import { formPageValidatoin } from './formValidation';
import InputCheckbox from '../inputCheckbox/inputCheckbox';
import InputDate from '../inputDate/inputDate';
import InputFile from '../inputFile/inputFile';
import InputName from '../inputName/inputName';
import InputRadio from '../inputRadio/inputRadio';
import SelectCity from '../selectCity/selectCity';

class FormPage extends React.Component<object> {
  state: IFormState;
  nameRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  cityRef = React.createRef<HTMLSelectElement>();
  checkboxRef = React.createRef<HTMLInputElement>();
  radioRefMale = React.createRef<HTMLInputElement>();
  radioRefFemale = React.createRef<HTMLInputElement>();
  fileRef = React.createRef<HTMLInputElement>();
  formRef = React.createRef<HTMLFormElement>();
  constructor(props: object) {
    super(props);
    this.state = {
      nameValid: true,
      dateValid: true,
      cityValid: true,
      radioValid: true,
      checkboxValid: true,
      fileRef: true,
    };
  }

  getCurrentData = () => {
    currentData.name = this.nameRef.current?.value;
    currentData.date = this.dateRef.current?.value;
    currentData.city = this.cityRef.current?.value;
    currentData.checkbox = this.checkboxRef.current?.checked;
    currentData.radio = this.radioCheck();
    currentData.image = this.fileRef.current?.files?.[0];
  };

  radioCheck = () => {
    if (this.radioRefMale.current?.checked) return this.radioRefMale.current?.value;
    if (this.radioRefFemale.current?.checked) return this.radioRefFemale.current?.value;
    else return '';
  };

  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.getCurrentData();
    this.setState(formPageValidatoin(currentData));
    if (!Object.values(formPageValidatoin(currentData)).includes(false)) {
      data.push({ ...currentData });
      this.formRef.current?.reset();
    }
    console.log(data);
  };

  render() {
    return (
      <div>
        <form ref={this.formRef} onSubmit={this.onSubmit}>
          <InputName valid={this.state.nameValid} nameRef={this.nameRef} />
          <InputDate valid={this.state.dateValid} dateRef={this.dateRef} />
          <SelectCity valid={this.state.cityValid} cityRef={this.cityRef} />
          <InputRadio
            valid={this.state.radioValid}
            radioRefMale={this.radioRefMale}
            radioRefFemale={this.radioRefFemale}
          />
          <InputCheckbox valid={this.state.checkboxValid} checkboxRef={this.checkboxRef} />
          <InputFile valid={this.state.fileRef} fileRef={this.fileRef} />
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
  fileRef: boolean;
}

export default FormPage;
