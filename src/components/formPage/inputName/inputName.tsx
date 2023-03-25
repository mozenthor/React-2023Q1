import React from 'react';

class InputName extends React.Component<{ valid: boolean }> {
  constructor(props: { valid: boolean }) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Name:</div>
        <input type="text" name="inputName" />
        {this.props.valid ? <div></div> : <div>Name length required 3-16 characters</div>}
      </div>
    );
  }
}

export default InputName;
