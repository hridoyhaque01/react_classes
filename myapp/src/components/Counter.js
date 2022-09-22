import { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };

  increamentCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state;
    const { render } = this.props;
    return render(count, this.increamentCount);
  }
}
