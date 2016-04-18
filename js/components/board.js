import React from 'react'
import ReactDom from 'react-dom'

const ROWS = 10;
const COLUMNS = 10;

let range = (total) => {
  return Array.apply(0, Array(total)).map((el, index) => index );
}

export default class Board extends React.Component {
  constructor(data) {
    super(data);
  }

  render() {
    let tbody = range(ROWS).map((row) => {
      return <tr className="Row" key={row}>
        {range(COLUMNS).map((column) => {
          return <td key={column}>column</td>
        })}
        </tr>
    });

    let info = <b>{this.props.player} board</b>

    return (
      <div style={{float: 'left'}}>
      {info}
      <table className="board-table">
      <tbody>
        {tbody}
      </tbody>
      </table>
      </div>
    )
  }
}
