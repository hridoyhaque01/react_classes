import React, { useReducer } from "react";

const initialState = {
  counter: 0,
  counter2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return { ...state, counter: state.counter + action.value };
    case "decreament":
      return { ...state, counter: state.counter - action.value };
    case "increament2":
      return { ...state, counter2: state.counter2 + action.value };
    case "decreament2":
      return { ...state, counter2: state.counter2 - action.value };
    default:
      return state;
  }
};

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <div>Count - {count.counter}</div>
        <button
          onClick={() =>
            dispatch({
              type: "increament",
              value: 1,
            })
          }
          type="button"
        >
          Increament by 1
        </button>

        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "decreament",
              value: 1,
            })
          }
        >
          Decreament by 1
        </button>
      </div>
      <div>
        <div>Count - {count.counter2}</div>
        <button
          onClick={() =>
            dispatch({
              type: "increament2",
              value: 1,
            })
          }
          type="button"
        >
          Increament2 by 1
        </button>

        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "decreament2",
              value: 1,
            })
          }
        >
          Decreament2 by 1
        </button>
      </div>
    </div>
  );
}
