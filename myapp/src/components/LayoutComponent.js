import React from "react";
import useWindowWidth from "../hooks/useWindowWidth";

export default function LayoutComponent() {
  const onSmallScreen = useWindowWidth(768);

  return (
    <div>
      <h1>You Are browsing on {onSmallScreen ? "small" : "large"} device</h1>
    </div>
  );
}
