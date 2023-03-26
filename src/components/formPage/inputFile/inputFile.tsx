import React from 'react';
import './inputFile.scss';

class InputFile extends React.Component<{
  valid: boolean;
  fileRef: React.RefObject<HTMLInputElement>;
}> {
  constructor(props: { valid: boolean; fileRef: React.RefObject<HTMLInputElement> }) {
    super(props);
  }

  render() {
    return (
      <div className="inputFile_wrapper">
        <div>Image:</div>
        <input type="file" name="inputFile" accept="image/*" ref={this.props.fileRef} />
        {this.props.valid ? (
          <div className="inputFile_error"></div>
        ) : (
          <div className="inputFile_error">Choose image file</div>
        )}
      </div>
    );
  }
}

export default InputFile;
