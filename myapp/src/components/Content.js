import React from "react";
import ThemeContext from "./context/themeContext";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function Content() {
  return (
    <div>
      <Counter>
        {(counter, increamentCount) => (
          <ThemeContext.Consumer>
            {({ theme }) => (
              <HoverCounter
                theme={theme}
                counter={counter}
                increamentCount={increamentCount}
              />
            )}
          </ThemeContext.Consumer>
        )}
      </Counter>
    </div>
  );
}
