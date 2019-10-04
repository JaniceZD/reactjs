import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { useState } from 'react'

function App() {
  
  const [count, setCount] = useState(0)

  const add = ()=>{
    setCount(count + 1)
  }

  const minus = ()=>{
    setCount(count - 1)
  }

  return (
    <div className="App">
      <div>
        <span className="value">{count}</span>
      </div>
      <button onClick={add}>加1</button>
      <button onClick={minus}>减1</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
