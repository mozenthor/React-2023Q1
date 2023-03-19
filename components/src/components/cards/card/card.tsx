import React from 'react';
import './card.scss';

class Card extends React.Component<{ data: ICard }> {
  constructor(props: { data: ICard }) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          {this.props.data.brand} {this.props.data.model}
        </div>
        <div className="card_image_wrapper">
          <img
            className="card_image"
            src={`../../../../public/images/${this.props.data.id}.webp`}
            alt=""
          />
        </div>
        <ul>
          <li>Model: {this.props.data.model}</li>
          <li>Color: {this.props.data.color}</li>
          <li>Memory: {this.props.data.memory}</li>
          <li>Released: {this.props.data.released}</li>
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
