import React from 'react';
import InputCheckbox from './inputCheckbox/inputCheckbox';
import InputDate from './inputDate/inputDate';
import InputName from './inputName/inputName';
import { inputNameValidation } from './inputName/inputNameValidation';
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

  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.setState({
      nameValid: inputNameValidation(this.formRef.current?.inputName.value),
    });
    console.log(this.state.nameValid);
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

interface IFormState {
  nameValid: boolean;
  dateValid: boolean;
  cityValid: boolean;
  radioValid: boolean;
  checkboxValid: boolean;
}

export default FormPage;
