import React, { useState } from "react";
import ChildComponent from "./ChildComponent"

const ParentComponent = () => {
  const [msg, setMsg] = useState("parent")

  const greetParent = (childName) => {
    alert(`Hello ${msg} and parameter is ${childName}`)
  };
  return (
    <div>
      <ChildComponent method={greetParent} />
    </div>
  )
}
export default ParentComponent;
