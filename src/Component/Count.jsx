import React, { useEffect, useState } from 'react'

const Count = () => {
const[count,setCount]=useState(0)

const updateCount=()=>{
    setCount(count=>count+1)
    setCount(count=>count+1)
}
console.log({count})

//* After adding Dependency, Now this will effect will render only after count value will change
useEffect(()=>{
document.title=`count: ${count}`
},[count])

if (count === 6) {
  throw new Error('I crashed!');
}
  return (
    <div>
      <p>count: {count}</p>
     
      <button onClick={updateCount}>increment by 2</button>
    </div>
  )
}

export default Count
