import React from 'react'
// react-type-animation----------
import { TypeAnimation } from 'react-type-animation';
const TypeAnimationed = () => {
  return (
    <div>
        <TypeAnimation
    sequence={[
      'Connect with Us', // Types 'One'
      1000, // Waits 1s
      'Connect to Discover the world', // Deletes 'One' and types 'Two'
      2500, // Waits 2s
      'Are you Excited to Discover..!', // Types 'Three' without deleting 'Two'
      
    ]}
    wrapper="div"
    cursor={true}
    repeat={Infinity}
    style={{ fontSize: '2em',fontWeight:'700',fontFamily: ['Roboto', 'sansSerif'],color: '	#cbdbda',width:'100%',height:'5rem',cursor:'default' }}
  /></div>
  )
}

export default TypeAnimationed