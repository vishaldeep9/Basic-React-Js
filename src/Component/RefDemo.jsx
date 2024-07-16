import React, { useEffect, useRef } from 'react'

const RefDemo = () => {
    const myRef=useRef()

    useEffect(()=>{
        myRef.current.focus()
    },[])
    
    const handleChange=()=>{
        alert(myRef.current.value)
    }
  return (
    <div>
      <input ref={myRef}/>
      <button onClick={handleChange}>click</button>
    </div>
  )
}
export default RefDemo
