import React from "react";

export default function HoverCounter({ counter, increamentCount, theme }) {
  const style =
    theme === "dark" ? { backgroundColor: "#000", color: "#fff" } : null;
  return (
    <div>
      <h1 style={style} onMouseOver={increamentCount}>
        Hovered {counter} times
      </h1>
    </div>
  );
}
