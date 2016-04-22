import React from 'react';
import ReactDom from 'react-dom';
import range from '../helpers/functions.js';

const ROWS = 10;
const COLUMNS = 10;

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
    let tbody = range(ROWS).map((row) => {
      return <tr key={row} className="row-md-1">
        {range(COLUMNS).map((column) => {
          return <td key={column} className="col-md-1" onDrop={this.onDrop} onDragOver={this.allowDrop}></td>
        })}
        </tr>
    });

    let info = <b>{this.props.player} board</b>

    return (
      <div className='board'>
      {info}
        <div className='board-grid'>
          {range(ROWS).map((row) => {
            return <div className='cell-grid'></div>
          })}
        </div>
      </div>
    )
  }
}
