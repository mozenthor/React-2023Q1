import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div>
        <div>NAME</div>
        <div>PHOTO</div>
        <ul>
          <li>Model:</li>
          <li>Color:</li>
          <li>Memory:</li>
          <li>Released:</li>
        </ul>
      </div>
    );
  }
}

export default Card;
