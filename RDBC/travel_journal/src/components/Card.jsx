import React from 'react'

function Card(unit) {
  console.log(unit);
  return (
    <div>
      <div className='grid gap-1 md:grid-cols-1'>
        <h1 className='text-center'>
          {unit.item.title}
        </h1>
        <img className=' relative' src={unit.item.imageUrl} alt="" >
        </img>
        <div className=''>
        <h3 className='text-sm'>
      {unit.item.description}
      </h3>
        </div>
      </div>
      
      
    </div>
  )
}

export default Card








// function Card(props) {
//   // console.log(props);
//   return (
//     <div>
//       <div>
//         <h1 className='text-large'>
//         {props.title}
//         </h1>
//         <img src={props.imageUrl} alt="japan stuff"></img>
//           <h3>
//           {props.description}
//           </h3>
//       </div>
//     </div>
//   )
// }

