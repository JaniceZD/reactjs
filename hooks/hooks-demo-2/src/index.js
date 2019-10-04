import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { useState } from 'react'

function App() {
  const [user, setUser] = useState({
    name: "janice",
    age: 18,
    hobbies: ["reading", "game", "coding", "basketball"]
  });

  const addHobbies = () => {
    let newHobbies = Math.random();
    setUser({
      ...user,
      hobbies: [...user.hobbies, newHobbies]
    });
  };

  const delHobbies = () => {
    user.hobbies.splice(1, 1);
    setUser({
      ...user,
      hobbies: user.hobbies
    });
  };

  return (
    <div className="App">
      <div>
        {user.name} , {user.age}
      </div>
      <div>{user.hobbies.join(" , ")}</div>
      <button onClick={addHobbies}>增加爱好</button>
      <button onClick={delHobbies}>删除爱好</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
