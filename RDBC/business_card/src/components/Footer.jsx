import React from 'react'
import { AiFillGithub,AiOutlineTwitter, AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'


function Footer() {
  return (
    <div>
      <footer className='flex space-x-4 bg-zinc-900 px-5 py-3 justify-around text-2xl border-solid border-1 '>
     
        <AiOutlineTwitter />
        <AiFillFacebook />
        <AiOutlineInstagram />
        <AiFillGithub />

        
      
      </footer>
    </div>
  )
}

export default Footer