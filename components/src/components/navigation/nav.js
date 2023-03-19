import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
class Navigation extends React.Component {
    render() {
        return (React.createElement("div", { className: "nav_bar" },
            React.createElement(NavLink, { to: '/', className: ({ isActive }) => (isActive ? 'active_link' : 'link') }, "Home"),
            React.createElement(NavLink, { to: '/about', className: ({ isActive }) => (isActive ? 'active_link' : 'link') }, "About Us")));
    }
}
export default Navigation;
