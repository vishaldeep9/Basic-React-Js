import React, { useState } from 'react'

const Counter = ({children}) => {
    const[count,setCount]=useState(0)
    const increment=()=>{
        setCount(count=>count+1)
    }    
  return (
    <div>
       {children(count,increment)}
    </div>
  )
}
export default Counter
