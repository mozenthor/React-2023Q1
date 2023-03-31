import Navigation from '../navigation/nav';
import React from 'react';
import './header.scss';
import { Outlet } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <h1>Phone store</h1>
          <Navigation></Navigation>
        </div>
        <Outlet />
      </>
    );
  }
}

export default Header;
