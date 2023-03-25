import React from 'react';

class InputDate extends React.Component<{ valid: boolean }> {
  constructor(props: { valid: boolean }) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Birthday</div>
        <input type="date" name="inputDate" />
        {this.props.valid ? <div></div> : <div>Choose correct date</div>}
      </div>
    );
  }
}

export default InputDate;
