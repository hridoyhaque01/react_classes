import React, { useState } from "react";
import Button from "./components/Button";
import ShowCount from "./components/ShowCount";
import Title from "./components/Title";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const increamentByOne = () => {
    setCount1((prevCount) => prevCount + 1);
  };
  const increamentByFive = () => {
    setCount2((prevCount) => prevCount + 5);
  };
  return (
    <div>
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <Button handleClick={increamentByOne}>Increament by one</Button>
      <hr />
      <ShowCount count={count2} title="Counter 2" />

      <Button handleClick={increamentByFive}>Increament by Five</Button>
    </div>
  );
}
