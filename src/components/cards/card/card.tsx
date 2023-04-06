import React, { useState } from 'react';
import './card.scss';
import { Basic } from 'unsplash-js/dist/methods/photos/types';
// import ModalWindow from '../modalWindow/modalWindow';

export function Card(props: { data: Basic }) {
  const [modalWindowActiv, setModalWindowActiv] = useState(false);

  const toggleModalWindowActiv = () => {
    setModalWindowActiv(!modalWindowActiv);
  };

  return (
    <div>
      <div className="card_container" onClick={toggleModalWindowActiv}>
        <div className="card_image_wrapper">
          <img className="card_image" src={props.data.urls.small} alt="" />
        </div>
        <ul className="card_description_wrapper">
          <li className="card_description_item">
            <span className="card_description_item_bold">Name: </span> {props.data.user.name}
          </li>
          <li className="card_description_item">
            <span className="card_description_item_bold">Likes: </span> {props.data.likes}
          </li>
        </ul>
      </div>
      {/* {modalWindowActiv && (
        <ModalWindow id={props.data.id} toggleModalWindow={toggleModalWindowActiv}></ModalWindow>
      )} */}
    </div>
  );
}

export default Card;
