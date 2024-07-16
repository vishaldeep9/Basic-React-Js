import React, { useEffect, useState } from 'react'
import MemoComponent from './MemoComponent'

const ParentMemoComponent = () => {
    const[name,setName]=useState("Vishal")
    
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setName("Vishal")  // Update name here
             console.log(`parent Component rendering--------`)
        },2000) // Run every 2 second
    },[]) // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div>
      <MemoComponent name={name}/>
    </div>
  )
}
export default ParentMemoComponent
