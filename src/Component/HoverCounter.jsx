import React, { useState } from "react";
import WIthCounter from "./WIthCounter";

const HoverCounter = ({ count, increment }) => {
  return (
    <div>
      <h2>count: {count}</h2>
      <button onMouseOver={increment}> clicked {count} times</button>
    </div>
  );
};
export default WIthCounter(HoverCounter,10);
