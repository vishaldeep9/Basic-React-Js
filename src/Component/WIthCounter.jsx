import React, { useState } from "react";
const WIthCounter = (WrappedComponent,incrementNumber) => {
  const withCounter = (props) => {
    //common state and method
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((count) => count + incrementNumber)
    };
   // console.log(props.name)
    return (
      <div>
        <WrappedComponent count={count} increment={increment} name={props.name} />
      </div>
    );
  };
  return withCounter;
};
export default WIthCounter;
