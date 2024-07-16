import React from 'react'

const ChildComponent = ({method}) => {
  return (
    <div>
      {/* <button onClick={method}>clicking in child component</button> */}
      <button onClick={()=>method(`child parameter`)}>clicking in child component</button>

    </div>
  )
}
export default ChildComponent
