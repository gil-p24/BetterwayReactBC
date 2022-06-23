import React from 'react'
import { EmojiSadIcon } from '@heroicons/react/solid'


function Header() {
  return (
    <div>
      <header className='  text-white bg-purple-800 bg-gradient-to-r from-purple-500 to-purple-700 p-5'>
        
        <h2 className='flex text-lg font-bold'>
          <EmojiSadIcon className='flex h-10 relative bottom-2' />
        Meme Generator
        </h2>
        <h4 className='font-extrabold text-sm  text-right  relative top-5 left-5 '>Get YO MEMES</h4>
      </header>
    </div>
  )
}

export default Header

//background is 