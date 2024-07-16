import React from 'react'

const UserGreetings = () => {
    const loggedIn=true
//*Ist way- usinf if and else
    // if(loggedIn){
    //     return(<div>Welcome Vishal</div>)
    // }else 
    // return (<div>Please Logged In</div>)
    //* 2nd way- using elementg variables
    // let message
    // if(loggedIn){
    //     message=<div>Welcome Vishal</div>
    // } else 
    // {
    //     message=<div>Please logged in</div>
    // }
    // return(
    //     <div>{message}</div>
    // )
    //* 3rd way- using Ternary conditional operator
    // return(
    //     loggedIn?<div>Welcome Vishal</div>:<div>Please logged In</div>
    // )
    //* 4th way- using Short circuit operator , this is the special case of Ternary conditional operator.
    //* When we want to render either something or nothing-That time Short circuit operator
    return(
        loggedIn && <div>Welcome Vishal</div>
    )  
//   return (
//     <div>
//       <div>Welcome Vishal</div>
//       <div>Please Logged In</div>
//     </div>
//   )
}

export default UserGreetings
