import React from "react";

const scaleNames = {
  c: "celsius",
  f: "Farhenheit",
};
export default function TemperatureInput({ scale, temp, handler }) {
  return (
    <div>
      <fieldset>
        <legend>enter temperature in {scaleNames[scale]} : </legend>
        <input type="text" onChange={(e) => handler(e, scale)} value={temp} />
      </fieldset>
    </div>
  );
}
