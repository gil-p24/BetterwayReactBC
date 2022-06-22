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

