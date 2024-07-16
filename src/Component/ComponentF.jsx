import React, { useContext } from 'react'
import { UserConsumer, UserContext } from './UserContext'

//^ 2st way
const ComponentF = () => {
    const username= useContext(UserContext)
  return (
    //  <UserConsumer>
    //     {
    //         (username)=>{
    //             return <div>Hello {username}</div>
    //         }
    //     }
    //  </UserConsumer>
    <div> Hello {username}</div>
  )
}
export default ComponentF

