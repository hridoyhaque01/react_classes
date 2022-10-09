import React, { useEffect, useRef } from "react";
import Input from "./Input";

export default function Form() {
  const inputRef = useRef(null);
  useEffect(() => {
    // component did load
    inputRef.current.focus();
  }, []);
  // [] => eta dile eta component did mount er moto kaj korbe orthat sudhu matro page load er somoi kaj korbe
  return (
    <div>
      <p>
        <Input ref={inputRef} type="text" placeholder="enter something" />
      </p>
    </div>
  );
}
