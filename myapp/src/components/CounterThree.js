import React, { useReducer } from "react";

const initialState = 0;
const initialState2 = 5;

const reducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + 1;
    case "decreament":
      return state - 1;
    default:
      return state;
  }
};

export default function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState2);

  return (
    <div>
      <div>
        <div>Count - {count}</div>
        <button onClick={() => dispatch("increament")} type="button">
          Increament
        </button>
        <button type="button" onClick={() => dispatch("decreament")}>
          Decreament
        </button>
      </div>
      <div>
        <div>Count - {count2}</div>
        <button onClick={() => dispatch2("increament")} type="button">
          Increament
        </button>
        <button type="button" onClick={() => dispatch2("decreament")}>
          Decreament
        </button>
      </div>
    </div>
  );
}
