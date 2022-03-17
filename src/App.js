import logo from './logo.svg';
import './App.css';

function App() {
  
  const array = ['Andre', 'Benny', 'Dakota']
  const arrLength = array.length
  
  const handleNameChange = () => {
    const names = array
    const int = Math.floor(Math.random() * arrLength)

    return names[int]
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()}!
        </p>
      </header>
    </div>
  );
}

export default App;
