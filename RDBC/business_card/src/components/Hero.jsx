import React from 'react'
import test1 from '../assets/test1.jpg'
import test3 from '../assets/test3.png'

function Hero() {
  return (
    <div className='grid grid-cols-2 gap-2 md:grid grid-row-2 grid-flow-col gap-2 sm:grid grid-flow-row-dense grid-cols-3 grid-rows-3'>
      <img className='w-full' src={test1} alt="testing" />
      <img className='w-full' src={test3} alt="testing" />
      
    </div>
  )
}

export default Hero