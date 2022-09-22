import React, { Component } from "react";

export default class ClickCounter extends Component {
  render() {
    const { counter, increamentCount } = this.props;
    return (
      <div>
        <button type="button" onClick={increamentCount}>
          clicked {counter} times
        </button>
      </div>
    );
  }
}
