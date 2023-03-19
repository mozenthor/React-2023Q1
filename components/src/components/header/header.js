import Navigation from '../navigation/nav';
import React from 'react';
import './header.scss';
class Header extends React.Component {
    render() {
        return (React.createElement("div", { className: "header" },
            React.createElement("h1", null, "Phone store"),
            React.createElement(Navigation, null)));
    }
}
export default Header;
