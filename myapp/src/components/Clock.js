import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: new Date(),
  //     locale: "bn-BD",
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }
  state = {
    date: new Date(),
    locale: "bn-BD",
  };

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date, locale } = this.state;
    console.log("clock component render");
    return (
      <div>
        <h1>
          <span>The Time is -</span> {date.toLocaleTimeString(locale)}
        </h1>
        <Button change={this.handleClick} locale="en-US">
          click
        </Button>
        {/* <Button change={this.handleClick.bind(this, "en-US")}>click</Button> */}

        {/* <button type="button" onClick={() => this.handleClick("en-US")}>
          click here
        </button> */}
        {/* <button type="button" onClick={this.handleClick.bind(this, "en-US")}>
          click here
        </button> */}
      </div>
    );
  }
}

export default Clock;
