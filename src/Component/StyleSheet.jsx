import React from 'react'
import "./mystyle.css"

const StyleSheet = (props) => {
    let classname= props.primary? 'primary ':''
  return (
    <div>
      <h1 className={`${classname} font-xl` }>Hello StyleSheet</h1>
      
    </div>
  )
}

export default StyleSheet
