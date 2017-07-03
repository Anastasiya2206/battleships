import React from 'react';
import ReactDom from 'react-dom';
import { range } from '../helpers/functions.js';
import { createStore } from 'redux';
import battleshipApp from '../redux/reducer.js';
import Cell from './cell.js'

const CELLS = 100;

export default class Board extends React.Component {

  constructor(data) {
    super(data);
  }

  renderCell(index) {
    let x = index % 10;
    let y = Math.floor(index / 10);
    return (
      <Cell key={index} x={x} y={y} />
    )
  }

  render() {
    const { player } = this.props;
    const info = <b>{player} board</b>;
    const cells = [];
    for(let i = 1; i <= CELLS; i++) {
      cells.push(this.renderCell(i))
    }

    return (
      <div className='board'>
      {info}
        <div className='board-grid'>
          {cells}
        </div>
      </div>
    )
  }
}

Board.contextTypes = {
  store: React.PropTypes.object
}
