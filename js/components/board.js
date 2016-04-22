import React from 'react';
import ReactDom from 'react-dom';
import range from '../helpers/functions.js';

const CELLS = 100;

export default class Board extends React.Component {
  constructor(data) {
    super(data);
  }

  onDrop(event) {
    console.log(event.target)
    let ship = event.dataTransfer.getData('ship');
    console.log(ship);
    event.target.appendChild(document.getElementById(ship));
  }

  onMouseOver(e) {
    console.log('mouseover');
  }

  allowDrop(event) {
    event.preventDefault();
  }

  render() {
    let info = <b>{this.props.player} board</b>

    return (
      <div className='board'>
      {info}
        <div className='board-grid'>
          {range(CELLS).map((row) => {
            return <div className='cell-grid'></div>
          })}
        </div>
      </div>
    )
  }
}
