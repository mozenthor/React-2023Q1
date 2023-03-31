import React from 'react';
import './nav.scss';
import NavItem from './navItem/navItem';

class Navigation extends React.Component {
  navData = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About US' },
    { path: '/form', name: 'Form' },
  ];
  render() {
    return (
      <div className="nav_bar">
        {this.navData.map((el) => (
          <NavItem key={el.name} path={el.path} name={el.name}></NavItem>
        ))}
      </div>
    );
  }
}

export default Navigation;
