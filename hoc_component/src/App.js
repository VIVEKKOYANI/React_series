import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>HOC</h1>
      <HOC cmp={Counter} />
      <HOCGreen cmp={Counter} />
    </div>
  );
}

function HOC(props){
  return <h2 style={{backgroundColor: 'red', width: 100}}><props.cmp /></h2>
}

function HOCGreen(props){
  return <h2 style={{backgroundColor: 'green', width: 100}}><props.cmp /></h2>
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  )
}

export default App;
