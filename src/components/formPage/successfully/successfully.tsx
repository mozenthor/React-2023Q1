import React from 'react';
import './successfully.scss';

class Successfully extends React.Component<{
  onAnimationEnd: React.AnimationEventHandler<HTMLDivElement> | undefined;
}> {
  constructor(props: { onAnimationEnd: React.AnimationEventHandler<HTMLDivElement> | undefined }) {
    super(props);
  }
  render() {
    return (
      <div className="successfully" onAnimationEnd={this.props.onAnimationEnd}>
        Successfully
      </div>
    );
  }
}

export default Successfully;
