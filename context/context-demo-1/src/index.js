import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const nContext = React.createContext()

function F1() {
  return <div className="bordered">
    1
    <F2 />
  </div>
}

function F2() {
  return <div className="bordered">
    2
    <F3 />
  </div>
}

function F3() {
  return (
    <div className="bordered">
      3
      <nContext.Consumer>
        {(x) => <F4 n={x.n} setN={x.setN} />}
      </nContext.Consumer>
    </div>
  )
}

function F4(props) {
  return (
    <div className="bordered">
      4, {props.n}
      <button onClick={props.setN}>change</button>
    </div>
  )
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      x: {
        n: 100,
        setN: () => {
          this.setState({
            x: {
              ...this.state.x,
              n: this.state.x.n - 1
            }
          })
        }
      }
    }
  }
  render() {
    return (
      <div className="app">
        <nContext.Provider value={this.state.x}>
          <F1 />
        </nContext.Provider>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
