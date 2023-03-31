import { IFormData } from 'components/formPage/form/formPage';
import React from 'react';
import './formCard.scss';

function FormCard(props: { data: IFormData }) {
  return (
    <div className="formCard_container ">
      <div className="formCard_name">{props.data.name}</div>
      <div className="formCard_image_wrapper">
        <img
          className="formCard_image"
          src={URL.createObjectURL(props.data.image as Blob | MediaSource)}
          alt=""
        />
      </div>
      <ul className="formCard_description_wrapper">
        <li className="formCard_description_item">
          <span className="formCard_description_item_bold">Birthday: </span> {props.data.date}
        </li>
        <li className="formCard_description_item">
          <span className="formCard_description_item_bold">City: </span> {props.data.city}
        </li>
        <li className="formCard_description_item">
          <span className="formCard_description_item_bold">Gender: </span> {props.data.radio}
        </li>
      </ul>
    </div>
  );
}

export default FormCard;
