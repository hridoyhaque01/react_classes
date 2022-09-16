import React from "react";

class Clock extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       date: new Date(),
  //     };
  //     }

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date } = this.state;
    const { locale } = this.props;
    return (
      <div>
        <h1>
          <span>The Time is -</span> {date.toLocaleTimeString(locale)}
        </h1>
      </div>
    );
  }
}

export default Clock;
