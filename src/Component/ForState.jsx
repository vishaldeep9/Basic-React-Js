import React, { useState } from 'react'

const ForState = () => {

    const[string,setString]=useState("Wellcome Visitor")

    const updateString=()=>{
        setString("Welcome Vishal")
    }

  return (
    <div>
      <p>{string}</p>
      <button onClick={updateString}>update</button>
    </div>
  )
}

export default ForState
