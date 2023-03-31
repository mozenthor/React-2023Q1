import CardsWrapper from '../../components/cards/cardsWrapper';
import Search from '../../components/search/search';
import React from 'react';
import './homePage.scss';

function Home() {
  return (
    <div>
      <div className="home_wrapper">
        <Search></Search>
        <CardsWrapper></CardsWrapper>
      </div>
    </div>
  );
}

export default Home;
