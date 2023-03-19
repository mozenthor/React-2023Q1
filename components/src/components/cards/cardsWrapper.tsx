import React from 'react';
import Card from './card/card';
import './cardsWrapper.scss';

class CardsWrapper extends React.Component {
  render() {
    return (
      <div className="cards_wrapper">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    );
  }
}

export default CardsWrapper;
