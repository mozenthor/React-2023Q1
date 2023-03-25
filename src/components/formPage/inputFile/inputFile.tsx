import React from 'react';

class InputFile extends React.Component<{ valid: boolean }> {
  constructor(props: { valid: boolean }) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>img:</div>
        <input type="file" name="inputFile" />
        {this.props.valid ? <div></div> : <div>ERROR</div>}
      </div>
    );
  }
}

export default InputFile;
