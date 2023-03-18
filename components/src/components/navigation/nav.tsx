import React from 'react';

class Navigation extends React.Component<{ name: string }> {
  constructor(props: { name: string }) {
    super(props);
  }
  render() {
    return <div>{this.props.name}</div>;
  }
}

export default Navigation;
