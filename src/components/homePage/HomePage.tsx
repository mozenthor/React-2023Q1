import CardsWrapper from '../../components/cards/cardsWrapper';
import Search from '../../components/search/search';
import React, { useState } from 'react';
import './homePage.scss';

function Home() {
  const [searchValue, setSearchValue] = useState('lake');

  return (
    <div>
      <div className="home_wrapper">
        <Search setSearchValue={setSearchValue}></Search>
        <CardsWrapper searchValue={searchValue}></CardsWrapper>
      </div>
    </div>
  );
}

export default Home;
