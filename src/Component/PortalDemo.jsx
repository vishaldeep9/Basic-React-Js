import React from 'react'
import ReactDOM from "react-dom"

const PortalDemo = () => {
  return ReactDOM.createPortal(
    <div>
      THis is Portal Demo 
    </div>,document.getElementById('portal-root')
  )
}
export default PortalDemo
