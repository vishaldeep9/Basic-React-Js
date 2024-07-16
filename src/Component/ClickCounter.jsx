import React, { useEffect, useState } from "react";
import WIthCounter from "./WIthCounter";

const ClickCounter = ({ name,count, increment }) => {
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={increment}> {name} clicked {count} times</button>
    </div>
  );
};
export default WIthCounter(ClickCounter,5);
