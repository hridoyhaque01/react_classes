import React from 'react';
import withCounter from './HOC/withCounter';

function HoverCounter(props) {
  const { count, incrementCount } = props;

  return (
    <div>
      <h1 onMouseOver={incrementCount}>the hover {count} times</h1>
    </div>
  );
}

export default withCounter(HoverCounter);
