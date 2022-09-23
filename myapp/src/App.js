import React, { Component } from "react";
import ClickCounter from "./components/ClickCounter";
import ThemeContext from "./components/context/themeContext";
import Counter from "./components/Counter";
import Section from "./components/Section";

export default class App extends Component {
  state = {
    theme: "dark",
  };

  render() {
    const { theme } = this.state;
    return (
      <div>
        <Counter>
          {(counter, increamentCount) => (
            <ClickCounter counter={counter} increamentCount={increamentCount} />
          )}
        </Counter>
        <ThemeContext.Provider value={{ theme }}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}
