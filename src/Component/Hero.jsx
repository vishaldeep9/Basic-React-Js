import React from 'react'

const Hero = ({heroName}) => {
// try {
//   if(heroName==='joker'){
//     throw new Error('This is not Hero!')
//   }
// } catch (error) {
//    return <div>something is wrong!</div>
// } 
  if(heroName==='joker'){
    throw new Error('This is not Hero!')
  }
  return (
    <div>
      {heroName}
    </div>
  )
}
export default Hero
