import React, { Component } from "react";

const withConter = (OriginalComponent) => {
  class NewComponent extends Component {
    state = {
      count: 0,
    };

    increamentCount = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
      const { count } = this.state;
      return (
        <OriginalComponent
          count={count}
          increamentCount={this.increamentCount}
        />
      );
    }
  }
  return NewComponent;
};

export default withConter;
