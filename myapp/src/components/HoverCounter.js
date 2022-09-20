import React from "react";
import withConter from "./HOC/withCounter";

function HoverCounter(props) {
  const { count, increamentCount } = props;
  return (
    <div>
      <h1 onMouseOver={increamentCount}>Hovered {count} times</h1>
    </div>
  );
}

export default withConter(HoverCounter);
