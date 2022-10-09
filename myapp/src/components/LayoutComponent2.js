import React from "react";
import useWindowWidth from "../hooks/useWindowWidth";

export default function LayoutComponent2() {
  const onSmallScreen = useWindowWidth(600);
  return (
    <div className={onSmallScreen ? "small" : "large"}>
      <h1>You Are browsing on another component</h1>
    </div>
  );
}
