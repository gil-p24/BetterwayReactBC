import React from 'react'
import { AiFillGithub,AiOutlineTwitter, AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'


function Footer() {
  return (
    <div>
      <footer className='flex space-x-4'>
        <AiOutlineTwitter />
        <AiFillFacebook />
        <AiOutlineInstagram />
        <AiFillGithub />
      
      </footer>
    </div>
  )
}

export default Footer