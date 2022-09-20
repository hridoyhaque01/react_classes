import { Component } from "react";

export default class Bracket extends Component {
  // eslint-disable-next-line react/no-unused-class-component-methods
  addBracket = (text) => `[ ${text} ]`;

  render() {
    const { addBracket } = this;
    return this.props.children({ addBracket });
  }
}
