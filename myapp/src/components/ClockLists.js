import React from "react";
import Clock from "./Clock";

export default function ClockLists({ quantities = [] }) {
  return (
    <div>
      {quantities.map((key) => (
        <Clock key={key} />
      ))}
    </div>
  );
}
