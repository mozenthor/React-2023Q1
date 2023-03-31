import React, { useState } from 'react';
import './formPage.scss';
import { useForm } from 'react-hook-form';
import { formPageValidatoin } from './formValidation';

function FormPage() {
  const { register, handleSubmit } = useForm<IFormData>();
  const [valuesValid, setValuesValid] = useState({
    nameValid: true,
    dateValid: true,
    cityValid: true,
    radioValid: true,
    checkboxValid: true,
    fileValid: true,
  });

  const onSubmit = (data: IFormData) => {
    setValuesValid(formPageValidatoin(data));
    if (!Object.values(formPageValidatoin(data)).includes(false)) {
      console.log('success');
    }
  };

  return (
    <div className="formPage_wrapper">
      <form className="formPage_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputName_wrapper">
          <div>Name:</div>
          <input
            type="text"
            className="inputName_input"
            {...register('inputName')}
            autoComplete="off"
          />
          {valuesValid.nameValid ? (
            <div className="inputName_error"></div>
          ) : (
            <div className="inputName_error">Name length required 3-16 characters</div>
          )}
        </div>
        <div className="inputDate_wrapper">
          <div>Birthday:</div>
          <input type="date" className="inputDate_input" {...register('inputDate')} />
          {valuesValid.dateValid ? (
            <div className="inputDate_error"></div>
          ) : (
            <div className="inputDate_error">Choose correct date</div>
          )}
        </div>

        <div className="selectCity_wrapper">
          <div>City:</div>
          <select id="city" className="selectCity_select" {...register('selectCity')}>
            <option value="" hidden></option>
            <option value="Minsk">Minsk</option>
            <option value="Brest">Brest</option>
            <option value="Gomel">Gomel</option>
            <option value="Grodno">Grodno</option>
            <option value="Vitebsk">Vitebsk</option>
            <option value="Mogilev">Mogilev</option>
          </select>
          {valuesValid.cityValid ? (
            <div className="selectCity_error"></div>
          ) : (
            <div className="selectCity_error">Choose your city</div>
          )}
        </div>
        <div className="inputRadio_wrapper">
          <div>Gender:</div>
          <div className="inputRadio_container">
            <label>
              <input
                className="inputRadio_item"
                type="radio"
                id="male"
                value="Male"
                {...register('inputRadio')}
              />
              Male
            </label>
            <label>
              <input
                className="inputRadio_item"
                type="radio"
                id="female"
                value="Female"
                {...register('inputRadio')}
              />
              Female
            </label>
          </div>
          {valuesValid.radioValid ? (
            <div className="inputRadio_error"></div>
          ) : (
            <div className="inputRadio_error">Choose one of the options</div>
          )}
        </div>
        <div className="inputFile_wrapper">
          <div>Image:</div>
          <input type="file" accept="image/*" {...register('inputFile')} />
          {valuesValid.fileValid ? (
            <div className="inputFile_error"></div>
          ) : (
            <div className="inputFile_error">Choose image file</div>
          )}
        </div>
        <div className="inputCheckbox_wrapper">
          <input type="checkbox" id="personalData" {...register('inputCheckbox')} />
          <label htmlFor="personalData">I consent to my personal data</label>
          {valuesValid.checkboxValid ? (
            <div className="inputCheckbox_error"></div>
          ) : (
            <div className="inputCheckbox_error">Please give consent</div>
          )}
        </div>
        <input className="input_submit" type="submit" value="Submit" />
      </form>
      {/* <FormCardsWrapper data={this.state.data} />
      {this.state.successfully && (
        <Successfully onAnimationEnd={() => this.setState({ successfully: false })} />
      )} */}
    </div>
  );
}

export interface IFormValid {
  nameValid: boolean;
  dateValid: boolean;
  cityValid: boolean;
  radioValid: boolean;
  checkboxValid: boolean;
  fileValid: boolean;
}

export interface IFormData {
  inputName: string | undefined;
  inputDate: string | undefined;
  selectCity: string | undefined;
  inputRadio: string | undefined;
  inputCheckbox: boolean | undefined;
  inputFile: FileList;
}

export default FormPage;
