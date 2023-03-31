import React from 'react';
import './inputCheckbox.scss';

class InputCheckbox extends React.Component<{
  valid: boolean;
  checkboxRef: React.RefObject<HTMLInputElement>;
}> {
  constructor(props: { valid: boolean; checkboxRef: React.RefObject<HTMLInputElement> }) {
    super(props);
  }

  render() {
    return (
      <div className="inputCheckbox_wrapper">
        <input
          type="checkbox"
          id="personalData"
          name="inputCheckbox"
          ref={this.props.checkboxRef}
        />
        <label htmlFor="personalData">I consent to my personal data</label>
        {this.props.valid ? (
          <div className="inputCheckbox_error"></div>
        ) : (
          <div className="inputCheckbox_error">Please give consent</div>
        )}
      </div>
    );
  }
}

export default InputCheckbox;
