import React from "react";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div className="App">
      <h1>Learn React</h1>

      <Counter
        render={(counter, increamentCount) => (
          <ClickCounter counter={counter} increamentCount={increamentCount} />
        )}
      />
      <Counter
        render={(counter, increamentCount) => (
          <HoverCounter counter={counter} increamentCount={increamentCount} />
        )}
      />
    </div>
  );
}

export default App;
