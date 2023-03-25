import React from 'react';

class InputCheckbox extends React.Component<{ valid: boolean }> {
  constructor(props: { valid: boolean }) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="checkbox" id="personalData" name="inputCheckbox" />
        <label htmlFor="personalData">I consent to my personal data</label>
        {this.props.valid ? <div></div> : <div>Please give consent</div>}
      </div>
    );
  }
}

export default InputCheckbox;
