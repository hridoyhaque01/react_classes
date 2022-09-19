import React, { Component } from "react";
import { convert, toCelsius, toFarhenheit } from "../lib/Converter";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default class Calculator extends Component {
  state = {
    temperature: "",
    scale: "c",
  };

  onTemperatureChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const farhenheit =
      scale === "c" ? convert(temperature, toFarhenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          temp={celsius}
          handler={this.onTemperatureChange}
          scale="c"
        />
        <TemperatureInput
          temp={farhenheit}
          handler={this.onTemperatureChange}
          scale="f"
        />

        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}
