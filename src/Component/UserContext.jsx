import React from 'react'

const UserContext=React.createContext("Hello Sir...!")

const UserProvider= UserContext.Provider
const UserConsumer= UserContext.Consumer

export  {UserProvider, UserConsumer,UserContext}
