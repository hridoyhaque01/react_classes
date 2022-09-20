import React from "react";
import withConter from "./HOC/withCounter";

function ClickCounter(props) {
  const { count, increamentCount } = props;
  return (
    <div>
      <button type="button" onClick={increamentCount}>
        clicked {count} times
      </button>
    </div>
  );
}

export default withConter(ClickCounter);
