import React from "react";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div className="App">
      <h1>Learn React</h1>
      <ClickCounter />
      <br />
      <HoverCounter />
    </div>
  );
}

export default App;
