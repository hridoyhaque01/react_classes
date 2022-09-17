import React from "react";
import Clock from "./components/Clock";

function App() {
  console.log("App component render");

  return (
    <div className="App">
      <h1>Learn React</h1>
      <Clock />
    </div>
  );
}

export default App;
