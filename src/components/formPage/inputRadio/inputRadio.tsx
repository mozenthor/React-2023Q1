import React from 'react';

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
      <div>
        <div>Male/Female:</div>
        <div>
          <input
            type="radio"
            id="male"
            value="Male"
            name="inputRadio"
            ref={this.props.radioRefMale}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            value="Female"
            name="inputRadio"
            ref={this.props.radioRefFemale}
          />
          <label htmlFor="female">Female</label>
        </div>
        {this.props.valid ? <div></div> : <div>Choose one of the options</div>}
      </div>
    );
  }
}

export default InputRadio;
