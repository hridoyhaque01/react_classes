import React from "react";
import MyComponent from "./components/MyComponent";

export default function App() {
  // const [show, setShow] = useState(true);
  return (
    <div>
      <MyComponent />
      {/* <h1>I miss You mySelf</h1>
      <div>{show && <MyComponent />}</div>
      <p>
        <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? "Hide post" : "Show post"}{" "}
        </button>
      </p> */}
    </div>
  );
}
