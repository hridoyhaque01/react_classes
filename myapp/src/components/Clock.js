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
    let lang;
    if (locale === "bn-BD") {
      lang = "en-US";
    } else {
      lang = "bn-BD";
    }
    return (
      <div>
        <h1>
          <span>The Time is -</span> {date.toLocaleTimeString(locale)}
        </h1>
        <Button change={this.handleClick} locale={lang} show={false} />
      </div>
    );
  }
}

export default Clock;
