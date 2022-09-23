import React, { useContext } from "react";
import ThemeContext from "./context/themeContext";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function Content() {
  const context = useContext(ThemeContext);
  const { theme, SwitchTheme } = context;
  return (
    <div>
      <Counter>
        {(counter, increamentCount) => (
          <HoverCounter
            SwitchTheme={SwitchTheme}
            theme={theme}
            counter={counter}
            increamentCount={increamentCount}
          />
        )}
      </Counter>
    </div>
  );
}

// export default class Content extends Component {
//   render() {
//     const { theme, SwitchTheme } = this.context;
//     return (
//       <div>
//         <Counter>
//           {(counter, increamentCount) => (
//             <HoverCounter
//               SwitchTheme={SwitchTheme}
//               theme={theme}
//               counter={counter}
//               increamentCount={increamentCount}
//             />
//           )}
//         </Counter>
//       </div>
//     );
//   }
// }

// Content.contextType = ThemeContext;
