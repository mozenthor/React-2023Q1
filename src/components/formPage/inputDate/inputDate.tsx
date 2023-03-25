import React from 'react';

class InputDate extends React.Component<{ valid: boolean }> {
  constructor(props: { valid: boolean }) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Birthday</div>
        <input type="date" name="date" />
        {this.props.valid ? <div>its ok</div> : <div>ERROR</div>}
      </div>
    );
  }
}

export default InputDate;
