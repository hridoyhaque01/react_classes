import React, { Component } from "react";

export default class BatchUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // increaseCount = () => {
  //   this.setState((state, props) => {
  //     count : state.count + props.number,
  //   });
  // };

  render() {
    const { count } = this.state;
    const { number } = this.props;
    return (
      <div>
        <h1>
          count : {count} = {number}
        </h1>
        <button type="button" className="btnClass" onClick={this.increaseCount}>
          Increament
        </button>
      </div>
    );
  }
}
