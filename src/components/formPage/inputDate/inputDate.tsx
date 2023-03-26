import React from 'react';
import './inputDate.scss';

class InputDate extends React.Component<{
  valid: boolean;
  dateRef: React.RefObject<HTMLInputElement>;
}> {
  constructor(props: { valid: boolean; dateRef: React.RefObject<HTMLInputElement> }) {
    super(props);
  }

  render() {
    return (
      <div className="inputDate_wrapper">
        <div>Birthday:</div>
        <input type="date" name="inputDate" ref={this.props.dateRef} className="inputDate_input" />
        {this.props.valid ? (
          <div className="inputDate_error"></div>
        ) : (
          <div className="inputDate_error">Choose correct date</div>
        )}
      </div>
    );
  }
}

export default InputDate;
