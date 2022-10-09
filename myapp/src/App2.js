import React, { useReducer } from "react";
import ComponentA from "./components/ComponentA";

export const counterContext = React.createContext();

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

export default function App2() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count: {count}</div>
      <counterContext.Provider value={{ countDispatch: dispatch }}>
        <ComponentA />
      </counterContext.Provider>
    </div>
  );
}
