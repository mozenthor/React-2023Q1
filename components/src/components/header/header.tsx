import Navigation from '../navigation/nav';
import React from 'react';
import './header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Phone store</h1>
        <Navigation></Navigation>
      </div>
    );
  }
}

export default Header;
