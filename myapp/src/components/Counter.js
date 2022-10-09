import React, { useReducer } from "react";

const initialState = 0;

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

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  // ekhane count er value holo useReducer er je notun value return kore seta

  // ekhane reducer ekta function jeta duita parameter nei , 1. previous value/state , current value /action

  // reducer er vetor je state ache seta muloto initialState

  // ekhane dispatch muloto ekta function ja muloto reducer er action ke janan dei ekhon kon action ghoteche

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increament")} type="button">
        Increament
      </button>
      <button type="button" onClick={() => dispatch("decreament")}>
        Decreament
      </button>
    </div>
  );
}
