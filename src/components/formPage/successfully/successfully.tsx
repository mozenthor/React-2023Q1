import React from 'react';
import './successfully.scss';

function Successfully(props: {
  onAnimationEnd: React.AnimationEventHandler<HTMLDivElement> | undefined;
}) {
  return (
    <div className="successfully" onAnimationEnd={props.onAnimationEnd}>
      Successfully
    </div>
  );
}

export default Successfully;
