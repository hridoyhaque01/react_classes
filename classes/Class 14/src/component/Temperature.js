import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

export default function Temperature({ scale, temperature, onTemperChange }) {
  console.log(scale);
  return (
    <fieldset>
      <legend> Enter your Temperature {scaleNames[scale]}: </legend>
      <input type="text" value={temperature} onChange={(e) => onTemperChange(e, scale)} />
    </fieldset>
  );
}
