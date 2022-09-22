import React, { Component } from "react";

export default class HoverCounter extends Component {
  render() {
    const { counter, increamentCount } = this.props;

    return (
      <div>
        <div>
          <h1 onMouseOver={increamentCount}>Hovered {counter} times</h1>
        </div>
      </div>
    );
  }
}
