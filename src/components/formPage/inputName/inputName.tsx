import React from 'react';
import './inputName.scss';

class InputName extends React.Component<{
  valid: boolean;
  nameRef: React.RefObject<HTMLInputElement>;
}> {
  constructor(props: { valid: boolean; nameRef: React.RefObject<HTMLInputElement> }) {
    super(props);
  }

  render() {
    return (
      <div className="inputName_wrapper">
        <div>Name:</div>
        <input
          type="text"
          name="inputName"
          ref={this.props.nameRef}
          className="inputName_input"
          autoComplete="off"
        />
        {this.props.valid ? (
          <div className="inputName_error"></div>
        ) : (
          <div className="inputName_error">Name length required 3-16 characters</div>
        )}
      </div>
    );
  }
}

export default InputName;
