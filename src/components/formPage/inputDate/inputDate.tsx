import React from 'react';

class InputDate extends React.Component<{
  valid: boolean;
  dateRef: React.RefObject<HTMLInputElement>;
}> {
  constructor(props: { valid: boolean; dateRef: React.RefObject<HTMLInputElement> }) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Birthday</div>
        <input type="date" name="inputDate" ref={this.props.dateRef} />
        {this.props.valid ? <div></div> : <div>Choose correct date</div>}
      </div>
    );
  }
}

export default InputDate;
