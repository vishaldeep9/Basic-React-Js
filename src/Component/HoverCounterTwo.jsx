import React, { useState } from 'react'

const HoverCounterTwo = ({count,increment}) => {
  
  return (
    <div>
      <h1 onMouseOver={increment}>hover {count} times</h1>
    </div>
  )
}

export default HoverCounterTwo
