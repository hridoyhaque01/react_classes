import React from "react";
import Bracket from "./components/composition/Bracket";
import Emoji from "./components/composition/Emoji";
import Text from "./components/composition/Text";

function App() {
  return (
    <div className="App">
      <h1>Learn React</h1>
      <Emoji>
        {({ addEmoji }) => (
          <Bracket>
            {({ addBracket }) => (
              <Text addBracket={addBracket} addEmoji={addEmoji} />
            )}
          </Bracket>
        )}
      </Emoji>
    </div>
  );
}

export default App;
