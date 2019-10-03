import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const themeContext = React.createContext()

function Box(props) {
  return <div className={`box ${props.theme}`}>{props.children}</div>
}

function Button() {
  return <button>装饰品</button>
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      theme: 'gray'
    }
  }
  change = () => {
    if (this.state.theme === 'gray') {
      this.setState({
        theme: 'pink'
      })
    }else{
      this.setState({
        theme: 'gray'
      })
    }
  }
  render() {
    return (
      <div className="app">
        <themeContext.Provider value={this.state.theme}>
          <button onClick={this.change.bind(this)}>换肤</button>
          <themeContext.Consumer>
            {
              (theme) =>
                <Box theme={theme}>
                  <Button></Button>
                </Box>
            }
          </themeContext.Consumer>
        </themeContext.Provider>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
