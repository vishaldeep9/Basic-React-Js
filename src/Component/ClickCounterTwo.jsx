import React, { useState } from 'react'

const ClickCounterTwo = ({count,increment}) => {
    
  return (
    <div>
      <button onClick={increment}>count {count} times</button>
     
    </div>
  )
}
export default ClickCounterTwo
