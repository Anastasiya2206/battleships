import React from 'react';
import ReactDom from 'react-dom';
import range from '../helpers/functions.js';
import { createStore } from 'redux';
import battleshipApp from '../redux/reducer.js';

const CELLS = 100;

export default class Board extends React.Component {
  constructor(data) {
    super(data);
  }

  componentDidMount() {
    const { store } = this.context;
  }

  onDrop(event) {
    console.log(event.target)
    let ship = event.dataTransfer.getData('ship');
    event.target.appendChild(document.getElementById(ship));
  }

  onMouseOver(e) {
    //console.log(this.store.getState());
  }

  allowDrop(event) {
    event.preventDefault();
  }

  render() {
    const { store } = this.props
    let info = <b>{this.props.player} board</b>

    return (
      <div className='board'>
      {info}
        <div className='board-grid' onMouseOver={this.onMouseOver.bind(this)}>
          {range(CELLS).map((row) => {
            return <div className='cell-grid' key={row}></div>
          })}
        </div>
      </div>
    )
  }
}
