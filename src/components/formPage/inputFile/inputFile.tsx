import React from 'react';

class InputFile extends React.Component<{
  valid: boolean;
  fileRef: React.RefObject<HTMLInputElement>;
}> {
  constructor(props: { valid: boolean; fileRef: React.RefObject<HTMLInputElement> }) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>img:</div>
        <input type="file" name="inputFile" accept="image/*" ref={this.props.fileRef} />
        {this.props.valid ? <div></div> : <div>Choose image file</div>}
      </div>
    );
  }
}

export default InputFile;
