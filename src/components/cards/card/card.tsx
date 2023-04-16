import React from 'react';
import './card.scss';
import { Basic } from 'unsplash-js/dist/methods/photos/types';
import { AppDispatch } from 'store';
import { toggleModalWindow, setPhotoId } from '../../../store/fetchPhotoById';
import { useDispatch } from 'react-redux';

export function Card(props: { data: Basic }) {
  const dispatch = useDispatch<AppDispatch>();

  const toggle = () => {
    dispatch(setPhotoId({ id: props.data.id }));
    dispatch(toggleModalWindow());
  };

  return (
    <div>
      <div className="card_container" onClick={toggle}>
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
    </div>
  );
}

export default Card;
