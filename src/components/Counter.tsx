import React, { useState } from "react";
import classes from "./Counter.module.scss";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{count}</div>
      <button
        className={classes.btn}
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
    </>
  );
}

export default Counter;
