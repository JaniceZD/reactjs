import React from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends React.Component {
  
  addIfOdd() {
    if (this.props.n % 2 === 1) {
      this.props.addIfOdd()
    }
  }
  addAsync() {
    setTimeout(() => {
      this.props.addAsync()
    }, 2000)
  }
  render() {
    return (
      <div className="app">
        <div>
          你点击了 <span id="value">{this.props.n}</span> 次
        </div>
        <div>
          <button id="add1" onClick={this.props.add1.bind(this)}>+1</button>
          <button id="minus1" onClick={this.props.minus1.bind(this)}>-1</button>
          <button id="addIfOdd" onClick={this.addIfOdd.bind(this)}>如果是单数就+1</button>
          <button id="addAfter2Sec" onClick={this.addAsync.bind(this)}>两秒后+1</button>
        </div>
      </div>
    )
  }
}

function getPartialStore(state) {
  return {
    n: state.n
  }
}

function actionCreator(dispatch) {
  return {
    add1: () => dispatch({ type: 'add', payload: 1 }),
    minus1: () => dispatch({ type: 'minus', payload: 1 }),
    addIfOdd: () => dispatch({ type: 'add', payload: 1 }),
    addAsync: () => dispatch({ type: 'add', payload: 1 })
  }
}

//将两个参数合并起来，作为 props 传给 App
export default connect(getPartialStore, actionCreator)(App);
