import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loadng: false,
        post: action.result,
        error: "",
      };
    case "ERROR":
      return {
        loadng: false,
        post: {},
        error: "There Was a Problem",
      };
    default:
      return state;
  }
};
export default function GetPost2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SUCCESS", result: data });
      })
      .catch(() => {
        dispatch({ type: "ERROR" });
      });
  }, []);
  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error || null}
    </div>
  );
}
