import React, { useState } from 'react';
import './card.scss';
import { Basic } from 'unsplash-js/dist/methods/photos/types';

export function Card(props: { data: Basic }) {
  const [modalWindowActiv, setModalWindowActiv] = useState(false);

  const toggleModalWindowActiv = () => {
    setModalWindowActiv(!modalWindowActiv);
  };

  return (
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
      {modalWindowActiv && (
        <div className="modal_window_wrapper">
          <div className="modal_window_background"></div>
          <div className="modal_window_conteiner"></div>
        </div>
      )}
    </div>
  );
}

export default Card;
