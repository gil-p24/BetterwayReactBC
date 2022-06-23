//imports snippet imrc
//imports
import Card from './components/Card';
import data from './assets/data'


function App() {

  return (
    <div>
      <section>
        {data.map(item => (
          <Card
            key={item.id}
            item={item}
           
          /> 
      ))}
      </section>
     
    </div>
  );
}

export default App;
