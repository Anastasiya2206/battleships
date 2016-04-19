import React from 'react'
import ReactDom from 'react-dom'
import Board from './components/board.js'
import Drawer from './components/drawer.js'

class App extends React.Component {
  constructor(data) {
    super(data);
  }

  render() {
    let player1 = 'player1';
    let player2 = 'player2';

    return (
      <div>
      <div className='col-lg-6'>
        <Board player={player1}/>
        <Drawer player={player1}/>
      </div>
      <div className='col-lg-6'>
        <Board player={player2}/>
        <Drawer player={player2}/>
      </div>
      </div>
    )
  }
}
ReactDom.render(<App />, document.getElementById('main'));
