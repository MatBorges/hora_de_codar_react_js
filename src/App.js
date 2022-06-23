import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';

function App() {

  return (
    <div className="App">
      <HelloWorld />
      <Pessoa foto='https://via.placeholder.com/150' nome='Mateus' idade='25' cargo='DEV'/>           
    </div>
  );
}

export default App;
