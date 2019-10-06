import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { useState } from "react"

function Box1() {
  return <div className="box">登录</div>
}

function Box2() {
  return <div className="box">注册</div>
}

function App() {
  let path = window.location.hash
  let initUI = path === '/signup' ? "注册" : "登录"
  let [ui, setUI] = useState(initUI)

  let onClickLogin = () => {
    setUI('登录')
    window.history.pushState(null, '', '/login')
  }

  let onClickSignUp = () => {
    setUI('注册')
    window.history.pushState(null, '', '/signup')
  }
  return (
    <div className="app">
      <div>
        <button onClick={onClickLogin}>登录</button>
        <button onClick={onClickSignUp}>注册</button>
      </div>
      <div>
        {ui === '登录' ? <Box1 /> : <Box2 />}
      </div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
