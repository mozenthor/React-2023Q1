import Navigation from '../navigation/nav';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navigation name={'Home'}></Navigation>
        <Navigation name={'About Us'}></Navigation>
        <Navigation name={'404'}></Navigation>
      </div>
    );
  }
}

export default Header;
