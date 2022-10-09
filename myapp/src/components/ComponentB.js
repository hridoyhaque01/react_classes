import React, { useContext } from "react";
// eslint-disable-next-line import/no-cycle
import { counterContext } from "../App";

export default function ComponentB() {
  const countContext = useContext(counterContext);
  return (
    <div>
      <p>Component A</p>
      <button
        type="button"
        onClick={() => countContext.countDispatch("increament")}
      >
        Increament
      </button>
      <button
        type="button"
        onClick={() => countContext.countDispatch("decreament")}
      >
        Decreament
      </button>
    </div>
  );
}
