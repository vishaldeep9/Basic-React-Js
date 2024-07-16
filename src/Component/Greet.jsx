import React from 'react'

const Greet = ({name,favHero,children,method}) => {
  //const{name,favHero}=props
  return (
    <>
      {method}
      {/* <h1>this {props.name} favHero is {props.favHero}</h1> */}
      <h1>this {name} favHero is {favHero}</h1>
      {/* {props.children} */}
      {children}
    </>
  )
}

export default Greet
