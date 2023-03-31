import React from 'react';
import { NavLink } from 'react-router-dom';
import './navItem.scss';

class NavItem extends React.Component<{ path: string; name: string }> {
  constructor(props: { path: string; name: string }) {
    super(props);
  }
  render() {
    return (
      <NavLink className={'link'} to={this.props.path}>
        {this.props.name}
      </NavLink>
    );
  }
}

export default NavItem;
