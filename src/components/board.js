import React from 'react';
import ReactDom from 'react-dom';
import { range } from '../helpers/functions.js';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import battleshipApp from '../redux/reducer.js';
import Cell from './cell.js'

const CELLS = 100;
const moveBattleship = (x, y) => {

}

class Board extends React.Component {

  constructor(data) {
    super(data);
  }

  componentDidMount() {
    console.log('component mounted')
  }

  renderCell(index, onCellClick) {
    let x = index % 10;
    let y = Math.floor(index / 10);
    let style = { display: 'inline' };
    return (
      <div style={style} key={index} onClick={() => onCellClick(x, y) }>
        <Cell key={index} x={x} y={y} />
      </div>
    )
  }

  render() {
    const { player, onCellClick, currentBattleship } = this.props;
    const info = <b>{player} board</b>;
    const cells = [];
    for(let i = 1; i <= CELLS; i++) {
      cells.push(this.renderCell(i, onCellClick))
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

const mapStateToProps = (state) => {
  return {
    currentBattleship: state.currentBattleship
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCellClick: (x, y) => {
      moveBattleship(x, y)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
