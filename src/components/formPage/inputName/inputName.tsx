import React from 'react';

class InputName extends React.Component<{
  valid: boolean;
  nameRef: React.RefObject<HTMLInputElement>;
}> {
  constructor(props: { valid: boolean; nameRef: React.RefObject<HTMLInputElement> }) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Name:</div>
        <input type="text" name="inputName" ref={this.props.nameRef} />
        {this.props.valid ? <div></div> : <div>Name length required 3-16 characters</div>}
      </div>
    );
  }
}

export default InputName;
