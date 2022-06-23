const sq = [2, 4, 6, 8]

const sq1 = sq.map(x => x * x)
console.log(sq1);


const names = ['stinky', 'pinky', 'winky', 'dinky']

const names1 = names.map(name => name.toUpperCase())
console.log(names1);



const yugioh = ['Rex Raptor', 'Yami Marik', 'Maximillion Pegasus', 'Yugi Muto', 'Kazuki Takahashi',]

const addHtml = yugioh.map(element => {
  //what being passed her is an object can do object method not array methods
  return `<p>${element.toLowerCase()}</p>`
})
//after mapping an do array methods on mapped array
console.log(addHtml.reverse());

// what does .map() method do?
// return a new array w/e get returned from the callback function provided is placed in the same index in the new array



// why is map the go to loop method in React?
// convert an array of raw data unto an array of jsx elements that can be displayed on the page

// why is th emap method better for creating componets
// make code more self-sustaining 