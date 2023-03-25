import React from 'react';

class InputCheckbox extends React.Component<{ valid: boolean }> {
  constructor(props: { valid: boolean }) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="checkbox" id="personalData" name="checkbox" />
        <label htmlFor="personalData">I consent to my personal data</label>
        {this.props.valid ? <div>its ok</div> : <div>ERROR</div>}
      </div>
    );
  }
}

export default InputCheckbox;
