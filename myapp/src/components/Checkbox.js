import React from "react";

export default function Checkbox({ className, text, ...rest }) {
  return (
    <label className={className} htmlFor="chekbox">
      <input type="checkbox" {...rest} />
      <span> {text}</span>
    </label>
  );
}
