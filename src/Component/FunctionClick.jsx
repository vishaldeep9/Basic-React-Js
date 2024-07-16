import React from 'react'

const FunctionClick = () => {

    // const clickHandler=()=>{
    //     console.log(`Button Clicked`)
    // }
    
  return (
    <div>
        {/* <button onClick={clickHandler}>click</button> */}
        <button onClick={()=>console.log(`Button Clicked`)}>click</button>
      
    </div>
  )
}

export default FunctionClick
