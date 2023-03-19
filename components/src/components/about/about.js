import Header from '../../components/header/header';
import React from 'react';
import './about.scss';
class About extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(Header, null),
            React.createElement("div", { className: "about_wrapper" },
                React.createElement("h2", null, "About Us"),
                React.createElement("p", { className: "about_text" }, "Online mobile phone shop is meant for the mobile phone shopping on the internet. This application includes the display and purchasing of mobile handsets of different companies. Users can go to Online Mobile phone store and get details about price and specification of any particular mobile handset and they can purchase it too."))));
    }
}
export default About;
