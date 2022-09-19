import React from "react";

export default function BoilingVerdict({ celsius = 0 }) {
  if (celsius >= 100) {
    return <p>The Water Would Boil</p>;
  }

  return <p>The Water Would not Boil</p>;
}
