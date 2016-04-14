import React from 'react'
import ReactDom from 'react-dom'
import Board from './components/board.js'

class App extends React.Component {
  constructor(data) {
    super(data);
  }

  render() {
    return (
      <div>
        <div><Board /></div>
        <div><Board /></div>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('main'));
