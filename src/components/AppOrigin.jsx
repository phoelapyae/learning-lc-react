import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Another from './Another';

function App() {

  const someStyle = {
    background: 'blue',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold'
  }

  const [count, setCount] = useState(0);

  const name = 'Zin Myo Maung';
  
  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Another name='Zin Myo Maung'/>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          true &&
          <p style={someStyle}>{ 3 + 2 }</p>
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
