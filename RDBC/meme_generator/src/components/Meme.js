import React from 'react'
import memesData from '../memesData'
function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg"
})

const [allMemeImages, setAllMemeImages] = React.useState(memesData)


function getMemeImage() {
  const memesArray = allMemeImages.data.memes
  const randomNumber = Math.floor(Math.random() * memesArray.length)
  const url = memesArray[randomNumber].url
  setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
  }))
  
}
  
function handleChange(event) {
  const {name, value} = event.target
  setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
  }))
}

  return (
    <main>
      <div className=' flex flex-col justify-center items-center'>
        <input className='border-2  border-purple-600 mt-20'
          type = "text"
          placeholder="top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          
        />
        <input className='border-2 border-purple-600 mt-2'
        type = "text"
          placeholder="bottom text"
          name="bottomText"
           value={meme.bottomText}
           onChange={handleChange}
          
        />
        
        <button onClick={getMemeImage} className='rounded-none mx-8 px-8 mt-2 ring-2 ring-purple-600 bg-purple-500'>
        get your meme image
      </button>
      </div>
      <div className='flex  justify-center border-r-2'>
        <img className='max-w-prose' src={meme.randomImage} alt='memems' />
        <article className='text-center text-lg font-bold text-black absolute'>
          <p>
          {meme.topText}
          </p>
          <p className='align-text-bottom mt-[37rem]'>
          {meme.bottomText}
          </p>
          
        </article>
       
      </div>
    
    </main>
  )
}

export default Meme


// md:grid grid-cols-2 gap-4 absolute right-5 mt-20