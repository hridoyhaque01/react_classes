import { Component } from "react";

export default class Emoji extends Component {
  // eslint-disable-next-line react/no-unused-class-component-methods
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

  render() {
    const { addEmoji } = this;
    return this.props.children({ addEmoji });
  }
}
