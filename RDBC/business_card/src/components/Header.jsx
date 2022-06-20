import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import fakeWteWoman from '../assets/fakeWteWoman.jpeg'

function Header() {
  return (
    <div className='flex items-center justify-center h-screen bg-zinc-700'>
      <header className='bg-zinc-800 p-2 mx-6 rounded-2xl'>
      <div className='flex flex-col md:flex-row rounded-l-xl'>
      <img className='object-fit rounded-xl h-80 md: h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover: rounded-xl duration-200' src={fakeWteWoman} alt="stockphoto" />
        </div>
        <div className=' p-6 md:p-12'>
        <h1 className='text-center text-white font-medium'>Laura Smith</h1>
          <h3 className='text-center font-small text-orange-400'>Frontend developer</h3>
          <a className='flex justify-center text-xs text-white' href="mailto:">lauraSmith.website</a>
        </div>
        <div className='flex flex-col mt-5 space-y-4'>
        <button className='px-5 py-3 rounded-md text-gray-700 bg-slate-200 hover: bg-slate-400 hover:text-white'> Email</button>
        </div>
       
      </header>
    
    
    </div>
  )
}

export default Header