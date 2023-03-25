import React from 'react';

class InputRadio extends React.Component<{ valid: boolean }> {
  constructor(props: { valid: boolean }) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Male/Female:</div>
        <div>
          <input type="radio" id="male" name="radio" />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="radio" />
          <label htmlFor="female">Female</label>
        </div>
        {this.props.valid ? <div>its ok</div> : <div>ERROR</div>}
      </div>
    );
  }
}

export default InputRadio;
