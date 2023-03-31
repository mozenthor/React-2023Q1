import React from 'react';
import './card.scss';

function Card(props: { data: ICard }) {
  return (
    <div className="card_container">
      <div className="card_name">
        {props.data.brand} {props.data.model}
      </div>
      <div className="card_image_wrapper">
        <img className="card_image" src={`/images/${props.data.id}.webp`} alt="" />
      </div>
      <ul className="card_description_wrapper">
        <li className="card_description_item">
          <span className="card_description_item_bold">Model: </span> {props.data.model}
        </li>
        <li className="card_description_item">
          <span className="card_description_item_bold">Color: </span> {props.data.color}
        </li>
        <li className="card_description_item">
          <span className="card_description_item_bold">Memory: </span>
          {props.data.memory}
        </li>
        <li className="card_description_item">
          <span className="card_description_item_bold">Released: </span>
          {props.data.released}
        </li>
      </ul>
    </div>
  );
}

export default Card;

export interface ICard {
  id: string;
  brand: string;
  model: string;
  color: string;
  memory: string;
  released: string;
}
