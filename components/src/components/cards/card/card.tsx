import React from 'react';
import './card.scss';

class Card extends React.Component<{ data: ICard }> {
  constructor(props: { data: ICard }) {
    super(props);
  }
  render() {
    return (
      <div className="card_container">
        <div className="card_name">
          {this.props.data.brand} {this.props.data.model}
        </div>
        <div className="card_image_wrapper">
          <img className="card_image" src={`/images/${this.props.data.id}.webp`} alt="" />
        </div>
        <ul className="card_description_wrapper">
          <li className="card_description_item">
            <span className="card_description_item_bold">Model: </span> {this.props.data.model}
          </li>
          <li className="card_description_item">
            <span className="card_description_item_bold">Color: </span> {this.props.data.color}
          </li>
          <li className="card_description_item">
            <span className="card_description_item_bold">Memory: </span>
            {this.props.data.memory}
          </li>
          <li className="card_description_item">
            <span className="card_description_item_bold">Released: </span>
            {this.props.data.released}
          </li>
        </ul>
      </div>
    );
  }
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
