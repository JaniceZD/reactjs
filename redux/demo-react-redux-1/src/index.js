import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'

function stateChanger(state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + action.payload
    case 'minus':
      return state - action.payload
    default:
      return state
  }
}

function render() {
  ReactDOM.render(<App value={store.getState()}
    onAdd1={() => { store.dispatch({ type: 'add', payload: 1 }) }}
    onAdd2={() => { store.dispatch({ type: 'minus', payload: 1 }) }}
    onAdd3={addIfOdd}
    onAdd4={addAsync}
  />, document.getElementById('root'));
}

const store = createStore(stateChanger)
render()
store.subscribe(() => {
  render()
})

function addIfOdd() {
  if (store.getState() % 2 === 1) {
    store.dispatch({ type: 'add', payload: 1 })
  }
}

function addAsync() {
  setTimeout(() => {
    store.dispatch({ type: 'add', payload: 1 })
  }, 2000)
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
