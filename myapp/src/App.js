import React, { Component } from "react";
import Counter from "./components/Counter";
import TodoObj from "./components/TodoObj";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
        <TodoObj />
        <Counter />
      </div>
    );
  }
}
