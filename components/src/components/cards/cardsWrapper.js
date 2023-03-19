import { mobileData } from '../../assets/data/mobileData';
import React from 'react';
import Card from './card/card';
import './cardsWrapper.scss';
class CardsWrapper extends React.Component {
    render() {
        return (React.createElement("div", { className: "cards_wrapper" }, mobileData.map((mobile) => (React.createElement(Card, { key: mobile.id, data: mobile })))));
    }
}
export default CardsWrapper;
