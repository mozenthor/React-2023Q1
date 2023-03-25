import { IFormDate } from 'components/formPage/formData/formData';
import React from 'react';
import './formCard.scss';

class FormCard extends React.Component<{ data: IFormDate }> {
  constructor(props: { data: IFormDate }) {
    super(props);
  }
  render() {
    return (
      <div className="card_wrapper">
        <div className="card_name">{this.props.data.name}</div>
        <div className="card_image_wrapper">
          <img
            className="card_image"
            src={URL.createObjectURL(this.props.data.image as Blob | MediaSource)}
            alt=""
          />
        </div>
        <ul>
          <li>
            <span className="card_description_item_bold">Birthday: </span> {this.props.data.date}
          </li>
          <li>
            <span className="card_description_item_bold">City: </span> {this.props.data.city}
          </li>
          <li>
            <span className="card_description_item_bold">Gender: </span> {this.props.data.radio}
          </li>
        </ul>
      </div>
    );
  }
}

export default FormCard;
