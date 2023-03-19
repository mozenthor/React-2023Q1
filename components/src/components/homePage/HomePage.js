import CardsWrapper from '../../components/cards/cardsWrapper';
import Header from '../../components/header/header';
import Search from '../../components/search/search';
import React from 'react';
import './homePage.scss';
class Home extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(Header, null),
            React.createElement("div", { className: "home_wrapper" },
                React.createElement(Search, null),
                React.createElement(CardsWrapper, null))));
    }
}
export default Home;
