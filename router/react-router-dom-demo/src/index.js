import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

function Home(){
  return <div className="box">首页</div>
}
function Login(){
  return <div className="box">登录</div>
}
function SignUp(){
  return <div className="box">注册</div>
}

function App(){
  return(
    <div className="app">
      <Router>
        <div className="nav">
          <Link to="/" className="link">首页</Link> | <Link to="/login" className="link">登录</Link> | <Link to="/signup" className="link">注册</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
