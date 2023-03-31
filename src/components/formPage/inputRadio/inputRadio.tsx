import React from 'react';
import './inputRadio.scss';

class InputRadio extends React.Component<{
  valid: boolean;
  radioRefMale: React.RefObject<HTMLInputElement>;
  radioRefFemale: React.RefObject<HTMLInputElement>;
}> {
  constructor(props: {
    valid: boolean;
    radioRefMale: React.RefObject<HTMLInputElement>;
    radioRefFemale: React.RefObject<HTMLInputElement>;
  }) {
    super(props);
  }

  render() {
    return (
      <div className="inputRadio_wrapper">
        <div>Gender:</div>
        <div className="inputRadio_container">
          <label>
            <input
              className="inputRadio_item"
              type="radio"
              id="male"
              value="Male"
              name="inputRadio"
              ref={this.props.radioRefMale}
            />
            Male
          </label>
          <label>
            <input
              className="inputRadio_item"
              type="radio"
              id="female"
              value="Female"
              name="inputRadio"
              ref={this.props.radioRefFemale}
            />
            Female
          </label>
        </div>
        {this.props.valid ? (
          <div className="inputRadio_error"></div>
        ) : (
          <div className="inputRadio_error">Choose one of the options</div>
        )}
      </div>
    );
  }
}

export default InputRadio;
