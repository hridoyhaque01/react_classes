import React from "react";
import ClockLists from "./components/ClockLists";

function App() {
  const quantities = [1, 2, 3];

  return (
    <div className="App">
      <h1>Learn React</h1>
      <ClockLists quantities={quantities} />
    </div>
  );
}

export default App;
