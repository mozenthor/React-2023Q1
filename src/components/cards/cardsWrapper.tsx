import mobileData from '../../assets/data/mobileData';
import React from 'react';
import Card from './card/card';
import './cardsWrapper.scss';

function CardsWrapper() {
  return (
    <div className="cards_wrapper">
      {mobileData.map((mobile) => (
        <Card key={mobile.id} data={mobile}></Card>
      ))}
    </div>
  );
}

export default CardsWrapper;
