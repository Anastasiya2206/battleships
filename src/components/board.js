import React from 'react';
import ReactDom from 'react-dom';
import range from '../helpers/functions.js';
import { createStore } from 'redux';
import battleshipApp from '../redux/reducer.js';
import { Cell } from './cell.js'

const CELLS = 100;

export default class Board extends React.Component {

  constructor(data) {
    super(data);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    unSubscribe();
  }

  onDrop(event) {
    let ship = event.dataTransfer.getData('ship');
    event.target.appendChild(document.getElementById(ship));
  }

  onMouseOver(e) {
    console.log(this.store.getState());
  }

  allowDrop(event) {
    event.preventDefault();
  }

  render() {
    const { player } = this.props
    let info = <b>{player} board</b>

    return (
      <div className='board'>
      {info}
        <div className='board-grid'>
          {range(CELLS).map((row) => {
            return <Cell key={row} />
          })}
        </div>
      </div>
    )
  }
}

Board.contextTypes = {
  store: React.PropTypes.object
}
