import { useState } from "react";
import React from "react";

export default function App(props: { name: string }) {
  return (
    <>
      <h1>Hello, {props.name}</h1>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked me {count} times
    </button>
  );
}
