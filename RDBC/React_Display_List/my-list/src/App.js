function App() {
  const names = ['Simba', 'pumba', 'timone', 'mufasa', 'rafaki']
  const lion = names.map(list => {
    return <li key={list}>lion king charName:{list }</li>
  })
  return (
    <div>
      <ul>
      {lion}
      </ul>
    </div>
  )
}

export default App