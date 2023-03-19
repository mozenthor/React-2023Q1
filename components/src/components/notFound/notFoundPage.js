import React from 'react';
import './notFoundPage.scss';
class NotFoundPage extends React.Component {
    render() {
        return React.createElement("h2", { className: "notFound" }, "404 Not found");
    }
}
export default NotFoundPage;
