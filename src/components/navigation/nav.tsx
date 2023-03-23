import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav_bar">
        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active_link' : 'link')}>
          Home
        </NavLink>
        <NavLink to={'/about'} className={({ isActive }) => (isActive ? 'active_link' : 'link')}>
          About Us
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
