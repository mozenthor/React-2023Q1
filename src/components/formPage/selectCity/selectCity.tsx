import React from 'react';

class SelectCity extends React.Component<{
  valid: boolean;
  cityRef: React.RefObject<HTMLSelectElement>;
}> {
  constructor(props: { valid: boolean; cityRef: React.RefObject<HTMLSelectElement> }) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>City:</div>
        <select name="selectCity" id="city" ref={this.props.cityRef}>
          <option value="" hidden></option>
          <option value="Minsk">Minsk</option>
          <option value="Brest">Brest</option>
          <option value="Gomel">Gomel</option>
          <option value="Grodno">Grodno</option>
          <option value="Vitebsk">Vitebsk</option>
          <option value="Mogilev">Mogilev</option>
        </select>
        {this.props.valid ? <div></div> : <div>Choose your city</div>}
      </div>
    );
  }
}

export default SelectCity;
