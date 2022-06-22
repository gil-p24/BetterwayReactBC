import React from 'react'










//in React artibutes of functions  are properties 
//pass in a variable into parameter as prop
// can pass any js data type in {}
    
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!example!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function PropParnet(props) {
//   console.log(props);
//   return (
//     <div>
//       <h3>{props.name}</h3>
//       <p>{props.phone}</p>
//       <p>{props.email}</p>
//       <img src={props.img}></img>
//     </div>
//   )
// }
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^example^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%quick review #!%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// what does prop accomplish?
    // makes a component more reusable

    // how to pass a prop into a component?
      // use object litteral {} PARAM NAME:[prop] arttirbutes of prop {props.name}

// would this work <div wontWork ={true}?
      // wont work jsx turn elements into real dom elements and have to follow Html specification regarding attributes & properties
      //would have to create custom properties in html first then use in jsx form

// what is props when passed?
    // it is an object and neeed to dot notion to access the value within props


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% quick review%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


            // ************************//destructuring***********************************************
// const person = {
//   name: 'fluffer',
//   phone: 18888787,
//   isAHoe: true,
//   }

// const { name, isAHoe } = person
//   console.log(isAHoe, name);

// function PropParnet({name, phone, email, img}) {
//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>{phone}</p>
//       <p>{email}</p>
//       <img src={img} alt="prop"></img>
//     </div>
//   )
// }
// ***********************************************dNuts************************************************

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& conditionals&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//if left hand side of conditional is a truhly valuely would render data on right side

// function PropParnet({ name, phone, email, img }) {
//   return (
//     <div>
//        {name && <h3>name: {name}</h3>}
//       {phone && <p> phone:{phone}</p>}
//       {email &&  <p> email:{email}</p>}
//       { img && <img src={img} alt="prop"></img>}
//     </div>
//   )
// }

// export default PropParnet



//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& conditionals&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



function PropParnet({name, phone, email, img}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{phone}</p>
      <p>{email}</p>
      <img src={img} alt="prop"></img>
    </div>
  )
}

export default PropParnet