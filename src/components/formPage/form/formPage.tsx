import React from 'react';
import { formPageValidatoin } from './formValidation';
import InputCheckbox from '../inputCheckbox/inputCheckbox';
import InputDate from '../inputDate/inputDate';
import InputFile from '../inputFile/inputFile';
import InputName from '../inputName/inputName';
import InputRadio from '../inputRadio/inputRadio';
import SelectCity from '../selectCity/selectCity';
import FormCardsWrapper from '../formCards/formCardsWrapper';

class FormPage extends React.Component<object> {
  state: { valid: IFormValid; data: IFormData[] };
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
      valid: {
        nameValid: true,
        dateValid: true,
        cityValid: true,
        radioValid: true,
        checkboxValid: true,
        fileRef: true,
      },
      data: [],
    };
  }
  currentData: IFormData = {
    name: '',
    date: '',
    city: '',
    radio: '',
    checkbox: false,
    image: null,
  };

  getCurrentData = () => {
    this.currentData.name = this.nameRef.current?.value;
    this.currentData.date = this.dateRef.current?.value;
    this.currentData.city = this.cityRef.current?.value;
    this.currentData.checkbox = this.checkboxRef.current?.checked;
    this.currentData.radio = this.radioCheck();
    this.currentData.image = this.fileRef.current?.files?.[0];
  };

  radioCheck = () => {
    if (this.radioRefMale.current?.checked) return this.radioRefMale.current?.value;
    if (this.radioRefFemale.current?.checked) return this.radioRefFemale.current?.value;
    else return '';
  };

  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.getCurrentData();
    this.setState({ valid: formPageValidatoin(this.currentData) });
    if (!Object.values(formPageValidatoin(this.currentData)).includes(false)) {
      this.setState({ data: [...this.state.data, { ...this.currentData }] });
      this.formRef.current?.reset();
    }
  };

  render() {
    return (
      <div>
        <form ref={this.formRef} onSubmit={this.onSubmit}>
          <InputName valid={this.state.valid.nameValid} nameRef={this.nameRef} />
          <InputDate valid={this.state.valid.dateValid} dateRef={this.dateRef} />
          <SelectCity valid={this.state.valid.cityValid} cityRef={this.cityRef} />
          <InputRadio
            valid={this.state.valid.radioValid}
            radioRefMale={this.radioRefMale}
            radioRefFemale={this.radioRefFemale}
          />
          <InputCheckbox valid={this.state.valid.checkboxValid} checkboxRef={this.checkboxRef} />
          <InputFile valid={this.state.valid.fileRef} fileRef={this.fileRef} />
          <input type="submit" value="Submit" />
        </form>
        <FormCardsWrapper data={this.state.data} />
      </div>
    );
  }
}

export interface IFormValid {
  nameValid: boolean;
  dateValid: boolean;
  cityValid: boolean;
  radioValid: boolean;
  checkboxValid: boolean;
  fileRef: boolean;
}

export interface IFormData {
  name: string | undefined;
  date: string | undefined;
  city: string | undefined;
  radio: string | undefined;
  checkbox: boolean | undefined;
  image: File | undefined | null;
}

export default FormPage;
