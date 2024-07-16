import React, { useRef } from 'react'
import Input from './Input'

const FocusInput = () => {
    const inputRef=useRef()

    const handleFocus=()=>{
        inputRef.current.focus()
    }
  return (
    <div>
      <Input ref={inputRef}/>
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}
export default FocusInput
