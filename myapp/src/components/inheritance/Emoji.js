import React, { Component } from "react";

export default class Emoji extends Component {
  // eslint-disable-next-line react/no-unused-class-component-methods
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

  render(override) {
    let text = "i am the emoji compononent";
    if (override) text = override;
    return <div>{text}</div>;
  }
}
