import React from 'react';
import BoilVerdict from './BoilVerdict';
import { convert, toCelsius, toFahrenheit } from './Converter';
import Temperature from './Temperature';

export default class Calculator extends React.Component {
  state = {
    temperature: '',
    scale: 'c',
  };

  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <Temperature scale="c" temperature={celsius} onTemperChange={this.handleChange} />
        <Temperature scale="f" temperature={fahrenheit} onTemperChange={this.handleChange} />

        <BoilVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}
