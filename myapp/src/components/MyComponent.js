import React, { useEffect, useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(".");
  // const [date, setDate] = useState(new Date());

  // const tick = () => {
  //   console.log("clock ticking");
  //   setDate(new Date());
  // };

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log("update document");
    document.title = `clicked ${count} times`;
  }, [count]);

  // useEffect(() => {
  //   console.log("timer updating");
  //   const interval = setInterval(tick, 1000);

  //   // clean up for component will unmount
  //   return () => {
  //     console.log("component unmounted");
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div>
      {/* <p>Time : {date.toLocaleTimeString()}</p> */}
      <p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </p>
      <p>
        <button onClick={addClick} type="button">
          Click
        </button>
      </p>
    </div>
  );
}
