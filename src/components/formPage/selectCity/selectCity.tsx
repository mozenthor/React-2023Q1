import React from 'react';
import './selectCity.scss';

class SelectCity extends React.Component<{
  valid: boolean;
  cityRef: React.RefObject<HTMLSelectElement>;
}> {
  constructor(props: { valid: boolean; cityRef: React.RefObject<HTMLSelectElement> }) {
    super(props);
  }

  render() {
    return (
      <div className="selectCity_wrapper">
        <div>City:</div>
        <select name="selectCity" id="city" ref={this.props.cityRef} className="selectCity_select">
          <option value="" hidden></option>
          <option value="Minsk">Minsk</option>
          <option value="Brest">Brest</option>
          <option value="Gomel">Gomel</option>
          <option value="Grodno">Grodno</option>
          <option value="Vitebsk">Vitebsk</option>
          <option value="Mogilev">Mogilev</option>
        </select>
        {this.props.valid ? (
          <div className="selectCity_error"></div>
        ) : (
          <div className="selectCity_error">Choose your city</div>
        )}
      </div>
    );
  }
}

export default SelectCity;
