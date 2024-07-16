import React from 'react'

const ChildArray = ({data,index}) => {
    
  return (
    <div>
       <h3 >{index}  Name is {data.name} and Mobile Number is {data.number} and Age is {data.age} </h3>
    </div>
  )
}
export default ChildArray
