import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(
    function multiCount() {
      console.log("Hello");
      return count * 5
    }, [count]
  );
  
  return (
    <div className="App">
      <h1>useMemo Hook in React</h1>
      <h2>Count: {count}</h2>
      <h2>Item: {item}</h2>
      <h2>{multiCountMemo}</h2>

      <button onClick={() => setCount(count + 1)}>Update Count</button>
      
      <button onClick={() => setItem(item * 1)}>Update Item</button>
    </div>
  );
}

export default App;
