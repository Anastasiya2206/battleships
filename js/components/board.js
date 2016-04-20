import React from 'react';
import ReactDom from 'react-dom';
import Battleship from '../battleship.js';
import range from '../helpers/functions.js';

const ROWS = 10;
const COLUMNS = 10;

export default class Board extends React.Component {
  constructor(data) {
    super(data);
  }

  render() {
    let tbody = range(ROWS).map((row) => {
      return <tr className="row" key={row}>
        {range(COLUMNS).map((column) => {
          return <td key={column} className="column">x</td>
        })}
        </tr>
    });

    let info = <b>{this.props.player} board</b>

    return (
      <div>
      {info}
      <table className="table table-bordered table-condensed table-hover">
      <tbody>
        {tbody}
      </tbody>
      </table>
      </div>
    )
  }
}
