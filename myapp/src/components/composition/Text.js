import React from "react";

export default function Text({ addEmoji, addBracket }) {
  let text = "i am Javascript Programming Language";

  if (addEmoji) {
    text = addEmoji(text, "8️⃣");
  }

  if (addBracket) {
    text = addBracket(text);
  }
  return <div>{text}</div>;
}
